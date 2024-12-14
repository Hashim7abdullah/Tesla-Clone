// contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Intercept axios requests
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // Cleanup interceptor
    return () => axios.interceptors.request.eject(interceptor);
  }, []);

  // Token refresh mechanism
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post('/api/user/refresh-token', { refreshToken });
      
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      return response.data.accessToken;
    } catch (error) {
      logout();
      return null;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
      
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      setUser(response.data.user);
      setIsAuthenticated(true);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      await axios.post('/api/user/logout', { refreshToken });
      
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  // Check authentication on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          // Verify token by making a protected request
          const response = await axios.get('/api/user/protected');
          setUser(response.data.user);
          setIsAuthenticated(true);
        } catch (error) {
          // If token is invalid, try refreshing
          await refreshAccessToken();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      loading, 
      login, 
      logout,
      refreshAccessToken 
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for authentication
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};