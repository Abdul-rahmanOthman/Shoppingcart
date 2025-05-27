import { createContext, useState, useEffect } from "react";

export const Shoppingcon = createContext({});

const initialcartitems = localStorage.getItem("cartitems")
  ? JSON.parse(localStorage.getItem("cartitems"))
  : [];

const Shoppingconprovider = ({ children }) => {
  const [cartitems, setcartitems] = useState(initialcartitems);
  const [showcart, setshowcart] = useState(false);
  const [colored, setcolor] = useState(null);
  const [sized, setsize] = useState(null);

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  return (
    <Shoppingcon.Provider
      value={{
        cartitems,
        setcartitems,
        showcart,
        setshowcart,
        sized,
        setsize,
        colored,
        setcolor,
      }}
    >
      {children}
    </Shoppingcon.Provider>
  );
};

export default Shoppingconprovider;
