import React from "react";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./UserRouter/UserRouter";

const App = () => {
  return (
    <Router>
      <UserRouter />
    </Router>
  );
};

export default App;
