import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
const Homepage = () => {
  return (
    <Routers>
      <Route path="/ali" element={<App />} />
    </Routers>
  );
};

export default Homepage;
