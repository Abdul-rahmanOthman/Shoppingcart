import React from "react";
import toast from "react-hot-toast";
import "./Button.css";
import { FaShoppingCart } from "react-icons/fa";
import { Shoppingcon } from "../context/Shoppingcon";
import { useContext } from "react";
import "./cards.css";

const Button = ({ block, style, lable = "add" }) => {
  const { setcartitems } = useContext(Shoppingcon);

  const handel = (block) => {
    toast("تم الاضافة للعربة");

    setcartitems((prev) => {
      const existitem = prev.find((item) => item.id === block.id);

      if (existitem) {
        return prev.map((item) =>
          item.id === block.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...block, quantity: 1 }];
      }
    });
  };

  return (
    <div className="conbut">
      <button
        style={style}
        className="buttonstyle"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handel(block);
        }}
      >
        {lable}
        {/* <FaShoppingCart color="white" /> */}
      </button>
    </div>
  );
};

export default Button;
