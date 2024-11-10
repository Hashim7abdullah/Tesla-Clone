import React from "react";
import { Route, Routes } from "react-router-dom";
import Support from "../Pages/Support";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import Model_S from "../Pages/carModels/Model-S/Model_S";
import Model_S_Demo from "../Pages/carModels/Model-S/Model_S_Demo";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignupPage />} />
      <Route path="/model-s-order" element={<Model_S />} />
      <Route path="/model-s-demo" element={<Model_S_Demo />} />
    </Routes>
  );
};

export default UserRouter;
