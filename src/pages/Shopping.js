import React, { createContext } from "react";
import { useState } from "react";

import "../styles/shopping.scss";
import Cart from "../components/Cart";
import ItemList from "../components/ItemList";

export const ShoppingCartContext = createContext(null);

/**
 * Renders the Shopping component, which provides the ShoppingCartContext to its children ItemList and Cart
 *
 * @returns {JSX.Element} The rendered Shopping component.
 */
const Shopping = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="shopping-container">
      <ShoppingCartContext.Provider value={{ cartItems, setCartItems }}>
        <ItemList />
        <Cart />
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default Shopping;
