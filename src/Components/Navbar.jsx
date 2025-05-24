import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Shoppingcon } from "../context/Shoppingcon";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setshowcart, showcart }) => {
  const { cartitems } = useContext(Shoppingcon);

  const links = [
    { title: "women", url: "/women" },
    { title: "men", url: "/" },
    { title: "kids", url: "/Kids" },
  ];
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
        <button
          className="button"
          type="button"
          onClick={() => setshowcart(!showcart)}
        >
          <FaShoppingCart color="white" />
        </button>
        {cartitems.length > 0 && (
          <span className="bubble">{cartitems.length}</span>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
