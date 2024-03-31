import React, { useState, useContext } from "react";

import itemListData from "../mockData/items.json";
import { ShoppingCartContext } from "../pages/Shopping";

/**
 * Renders the ItemList component with a list of items.
 * Allows adding items to the cart and displays a message when an item is added.
 *
 * @returns {JSX.Element} The rendered ItemList component.
 */
const ItemList = () => {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const [messageVisible, setMessageVisible] = useState(false);

  /**
   * Handles adding an item to the shopping cart.
   * Updates the shopping cart items with the new item.
   * Sets a message to be displayed indicating that the item was added.
   * @param {Object} item - The item to be added to the shopping cart.
   *                        Should have the format { id, name, cost, offerAvailable }.
   */
  const handleItemAdd = (item) => {
    const updatedShoppingCart = [...cartItems, item];
    setCartItems(updatedShoppingCart);
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 500);
  };

  return (
    <div className="item-container">
      <h3 className="d-flex justify-content-center">Items</h3>
      <div className={messageVisible ? "message-visible" : "visible-hidden"}>
        Item added in cart !
      </div>
      {itemListData?.data?.map((item) => (
        <div className="item" key={item.id}>
          <div className="item-name">{item.name}</div>
          <div className="item-cost">{`${item.cost}p per item`}</div>
          <button onClick={() => handleItemAdd(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
