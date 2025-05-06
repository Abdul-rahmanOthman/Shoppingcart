import React from "react";
import toast from "react-hot-toast";
import "./Button.css";
import { FaShoppingCart } from "react-icons/fa";
import { Shoppingcon } from "../context/Shoppingcon";
import { useContext } from "react";
const Button = ({ block }) => {
  const { setcartitems } = useContext(Shoppingcon);

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
