import React from "react";
import Navbar from "./Components/Navbar";
import { useParams } from "react-router-dom";
import { blocks } from "./Components/Cards";
import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";
import { Shoppingcon } from "./context/Shoppingcon";
import { useContext } from "react";
import Cart from "./Cart";
const Product_details = () => {
  const { id } = useParams();
  const { colored } = useContext(Shoppingcon);
  const { setcolor } = useContext(Shoppingcon);
  const { sized } = useContext(Shoppingcon);
  const { setsize } = useContext(Shoppingcon);
  const product = blocks.find((p) => p.id === id);
  const { showcart } = useContext(Shoppingcon);
  const { setshowcart } = useContext(Shoppingcon);
  const [main_img, set_main_img] = useState(product.pics[0]);

  return (
    <div>
      <Navbar setshowcart={setshowcart} showcart={showcart} />
      <Cart />
      <div
        style={{
          display: "flex",
          gap: "15px",
          margin: "60px",
          marginLeft: "100px",
          marginRight: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {product?.pics?.map((pic) => (
            <img
              src={pic}
              style={{
                width: "100px",
                height: "100px",
                cursor: "pointer",
                display: "flex",
                flexWrap: "wrap",
              }}
              onClick={() => set_main_img(pic)}
              className={`smallpic ${main_img === pic ? "selected" : ""}`}
            />
          ))}
        </div>

        <img
          src={main_img}
          style={{ height: "75vh", display: "flex", flexWrap: "wrap" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px",
            flexWrap: "wrap",
          }}
        >
          <h1 style={{ marginBottom: "10px" }}> {product.title}</h1>
          <h3>size</h3>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            {product.size.map((s) => (
              <button
                onClick={() => setsize(s)}
                style={{ border: sized === s ? "4px solid black" : "" }}
              >
                {s}
              </button>
            ))}
          </div>
          <h3>color</h3>
          <div style={{ marginTop: "10px" }}>
            {product.color.map((c) => (
              <button
                onClick={() => setcolor(c)}
                className="color-dot"
                style={{
                  backgroundColor: c,
                  margin: "10px",
                  border: colored === c ? "4px solid black" : "",
                }}
              ></button>
            ))}
          </div>
          <h3>price</h3>
          <h4 style={{ margin: "10px" }}>{product.price} $</h4>
          <div>
            <Button
              block={product}
              style={{
                position: "static",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "5px",
                opacity: "1",
                visibility: "visible",
                width: "300px",
                color: "white",
              }}
              lable="add to cart"
            />
          </div>
          <h4 style={{ marginLeft: "15px" }}>{product.desc}</h4>
        </div>
      </div>
    </div>
  );
};

export default Product_details;
