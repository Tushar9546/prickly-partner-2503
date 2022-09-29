import React from "react";
import { Route, Routes } from "react-router-dom";
import GroceriesProducts from "./GroceriesProducts";
import { Home } from "./Home";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { ProductDetailPage } from "./ProductDetailPage";
import { Women } from "./Women";

export const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceriesproducts" element={<GroceriesProducts />}/>
        <Route path="/fashion/women" element={<Women />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/fashion/women/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};
