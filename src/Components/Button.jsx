import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import "./Button.css";
import { FaShoppingCart } from "react-icons/fa";
const Button = ({ setcartitems, block }) => {
  const handel = (block) => {
    toast("تم الاضافة للعربة");
    setcartitems((prev) => {
      return [...prev, block];
    });
  };
  return (
    <>
      <button
        className="buttonstyle"
        type="button"
        onClick={() => handel(block)}
      >
        <FaShoppingCart color="white" />
      </button>
    </>
  );
};

export default Button;
