import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import toast, { Toaster } from "react-hot-toast";
import Shoppingconprovider from "./context/Shoppingcon.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Shoppingconprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Shoppingconprovider>
    <Toaster />
  </StrictMode>
);
