import React from "react";
import { Route, Routes } from "react-router-dom";
import Men from "./Homepage";
import Women from "./women";
import Product_details from "./Product_details";
import Kids from "./Kids"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/:id" element={<Product_details />} />
      <Route path="/Kids" element={<Kids />} />

    </Routes>
  );
};

export default App;
