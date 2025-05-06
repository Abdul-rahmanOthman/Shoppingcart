import React, { useContext } from "react";
import "./Cards.css";
import Button from "./Button";

const Cards = () => {
  const blocks = [
    {
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
    {
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
    {
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
    {
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: "s",
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
    {
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: "s",
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
    {
      image: "/plane.png",
      title: "samer",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
    {
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
    },
  ];

  return (
    <div className="cards-con">
      {blocks.map((block) => (
        <div className="cards">
          <img src={block.image} alt={block.title} className="card-img" />
          <h4 className="text">{block.title}</h4>
          {/* <p className="text">{block.desc}</p> */}
          <p className="text">{block.price}</p>
          <Button block={block} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
