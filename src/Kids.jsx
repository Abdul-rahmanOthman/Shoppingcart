import { useContext, useEffect, useRef, useState } from "react";

import "./App.css";
import "./Components/Cards.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
// import Form from "./Components/Form";
// import Test from "./Components/Test";
import { Shoppingcon } from "./context/Shoppingcon";
import Cart from "./Cart";

function Kids() {
  const [fdata, setfdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  const { cartitems } = useContext(Shoppingcon);
  const { setcartitems } = useContext(Shoppingcon);
  const { showcart } = useContext(Shoppingcon);
  const { setshowcart } = useContext(Shoppingcon);

  // const [showcart, setshowcart] = useState(false);
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
      <h1>Kids</h1>

      <Cards />
      <Cart />

      {/* {!isloading && fdata && <Test item={fdata} />} */}
    </>
  );
}

export default Kids;
