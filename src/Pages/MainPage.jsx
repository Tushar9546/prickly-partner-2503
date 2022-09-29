import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { Women } from "./Women";

export const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fashion/women" element={<Women />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
};
