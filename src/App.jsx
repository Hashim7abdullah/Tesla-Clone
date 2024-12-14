import React from "react";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./UserRouter/UserRouter";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <UserRouter />
      </Router>
    </AuthProvider>
  );
};

export default App;
