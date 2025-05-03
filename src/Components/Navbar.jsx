import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const links = [
    { title: "women", url: "/" },
    { title: "men", url: "/" },
    { title: "kids", url: "/" },
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
      </ul>
    </nav>
  );
};

export default Navbar;
