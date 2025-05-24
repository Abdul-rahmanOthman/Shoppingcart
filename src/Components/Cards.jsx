import React, { useContext } from "react";
import "./Cards.css";
import Button from "./Button";
import Product_details from "../Product_details";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const blocks = [
  {
    id: "1",
    image: "/plane.png",
    title: "name",
    desc: "njfnjskd",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 0,
    pics: [
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
    ],
  },
  {
    id: "2",
    image: "/plane.png",
    title: "name",
    desc: "this is the best product and u can buy it remotlly , nothing no be affrade of just add it to ur cart and lets go !!!!",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 20,
    pics: [
      "/plane.png",
      "/kaba.jpg",
      "/istanbul.jpg",
      "/facebook.png",
      "/NBA.png",
      "/plane.png",
    ],
  },
  {
    id: "3",
    image: "/plane.png",
    title: "name",
    desc: "njfnjskd",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 20,
    pics: [
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
    ],
  },
  {
    id: "4",
    image: "/plane.png",
    title: "name",
    desc: "njfnjskd",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 20,
    pics: [
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
    ],
  },
  {
    id: "5",
    image: "/plane.png",
    title: "name",
    desc: "njfnjskd",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 20,
    pics: [
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
    ],
  },
  {
    id: "6",
    image: "/plane.png",
    title: "samer",
    desc: "njfnjskd",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 20,
    pics: [
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
    ],
  },
  {
    id: "7",
    image: "/plane.png",
    title: "name",
    desc: "njfnjskd",
    price: "50",
    size: ["XS", "S", "M", "L"],
    color: ["#a1e3c1", "#000000", "#004d4d"],
    avail: 20,
    pics: [
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
      "/plane.png",
    ],
  },
];
const Cards = () => {
  const navigate = useNavigate(); // 👈 import navigate

  return (
    <div className="cards-con">
      {blocks.map((block) => (
        <button
          className={`cards ${block.avail ? "" : "out-of-stock"}`}
          onClick={() => navigate(`/${block.id}`)}
        >
          <img src={block.image} alt={block.title} className="card-img" />
          <h4 className="text">{block.title}</h4>
          {/* <p className="text">{block.desc}</p> */}
          <p className="text">{block.price}</p>
          <Button block={block} lable={<FaShoppingCart color="white" />} />
        </button>
      ))}
    </div>
  );
};

export default Cards;
