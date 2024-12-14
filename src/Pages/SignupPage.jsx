import axios, { Axios } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupPage = () => {
  const [name, setName] = useState(""); // Stores the username
  const [email, setEmail] = useState(""); // Stores the email
  const [number, setNumber] = useState(""); // Stores the phone number
  const [password, setPassword] = useState(""); // Stores the password
  const [error, setError] = useState(""); // Stores the error message
  const navigate = useNavigate(); // For navigating between pages
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh on form submission

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signin",
        {
          name,
          email,
          password,
          number,
        }
      ); // Sends form data to the backend API

      if (response.data.message === "User registered successfully") {
        console.log("User created successfully");
        navigate("/login"); // Navigates to login page if successful
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <Container>
      <h2>Sign In to Continue</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SignupBody>
        <form onSubmit={handleSubmit}>
          <label>Username :</label>
          <input
            value={name}
            type="text"
            name="username"
            required
            onChange={(e) => setName(e.target.value)} // Updates the name state when the input changes
          />
          <label>Email :</label>
          <input
            value={email}
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)} // Updates the email state
          />
          <label>Phone number :</label>
          <input
            value={number}
            type="number"
            name="number"
            required
            onChange={(e) => setNumber(e.target.value)} // Updates the number state
          />
          <label>Password :</label>
          <input
            value={password}
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)} // Updates the password state
          />
          <button type="submit">Sign In</button>
        </form>
      </SignupBody>
    </Container>
  );
};

export default SignupPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(244, 242, 242, 0.934);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  h2 {
    @media (max-width: 768px) {
      font-size: medium;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
  font-size: 0.9rem;
`;

const SignupBody = styled.div`
  width: 500px;
  padding: 50px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 100%;
  overflow-y: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.3rem;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 250px;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  button {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #0056b3;
    }
  }

  @media (max-height: 600px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    width: 400px;
    padding: 30px;
  }

  @media (max-width: 480px) {
    width: 250px;
    padding: 20px;
  }
`;
