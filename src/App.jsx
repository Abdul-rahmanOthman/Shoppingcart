import { useContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Components/Cards.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Form from "./Components/Form";
import Test from "./Components/Test";
import { Shoppingcon } from "./context/Shoppingcon";

function App() {
  const [fdata, setfdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  const { cartitems } = useContext(Shoppingcon);
  const { setcartitems } = useContext(Shoppingcon);
  const [showcart, setshowcart] = useState(false);
  const shut = useRef(true);

  useEffect(() => {
    const Getdata = async () => {
      try {
        setisloading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();

        setfdata(data);
        setisloading(false);
        if (shut.current) {
          console.log("hi");
          shut.current = false;
        }
      } catch (error) {
        console.log("ops!!", error);
      }
    };
    Getdata();
  }, []);

  return (
    <>
      {isloading && <p>loading.....</p>}
      <Navbar setshowcart={setshowcart} showcart={showcart} />
      <h1>women</h1>

      <Cards />
      <Form />

      <div className="cardoverlay">
        {showcart && (
          <>
            <div className="cart-drop"></div>
            <div className="cartcon">
              <h4>my bag:{cartitems.length}</h4>
              {cartitems.map((items) => (
                <div className="cards">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={items.image}
                      alt={items.title}
                      className="cartimg"
                    />
                    <div className="incdec">
                      <button
                        className="shape"
                        onClick={() =>
                          setcartitems((prev) =>
                            prev.map((prev) =>
                              prev.id === items.id
                                ? { ...prev, quantity: prev.quantity + 1 }
                                : prev
                            )
                          )
                        }
                      >
                        +
                      </button>
                      <h4>{items.quantity}</h4>

                      <button
                        className="shape"
                        onClick={() =>
                          setcartitems((prev) => {
                            const update = prev.map((dec) =>
                              dec.id === items.id
                                ? { ...dec, quantity: dec.quantity - 1 }
                                : dec
                            );
                            return update.filter((item) => item.quantity > 0);
                          })
                        }
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <h4>{items.title}</h4>

                      <p>{items.price}</p>
                      <h5>size</h5>

                      {items.size?.map?.((size) => (
                        <span className="sizestyle">{size}</span>
                      ))}

                      <h5>color</h5>
                      <div className="color-container">
                        {Array.isArray(items.color) &&
                          items.color.map((color) => (
                            <span
                              className="color-dot"
                              style={{ backgroundColor: color }}
                            ></span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" className="placeoreder">
                place order
              </button>
            </div>
          </>
        )}
      </div>
      {!isloading && fdata && <Test item={fdata} />}
    </>
  );
}

export default App;
