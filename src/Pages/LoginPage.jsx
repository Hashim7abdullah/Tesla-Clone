import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleSignin = () => {
    navigate("/signin");
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.data.success) {
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("User Not Found");
      } else {
        setError("Invalid email or password");
        console.error("Login error:", error);
      }
    }
  };

  return (
    <Container>
      <LoginBox>
        <h1>Login</h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
        <SignInOption>
          <p>Doesn't have an account ?</p>
          <h5 onClick={toggleSignin}>Signin</h5>
        </SignInOption>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  overflow-y: auto;
`;

const LoginBox = styled.div`
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-height: 100%;
  overflow-y: auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 40px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const SignInOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  p {
    font-size: small;
    gap: 10px;
  }
  h5 {
    &:hover {
      color: #4c4ce2;
      cursor: pointer;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
  font-size: 0.9rem;
`;
