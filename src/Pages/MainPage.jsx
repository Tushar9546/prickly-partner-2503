import React from "react";
import { Route, Routes } from "react-router-dom";
import GroceriesProducts from "./GroceriesProducts";
import { Home } from "./Home";
import { Women } from "./Women";

export const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceriesproducts" element={<GroceriesProducts />}/>
        <Route path="/fashion/women" element={<Women />} />
      </Routes>
    </div>
  );
};
