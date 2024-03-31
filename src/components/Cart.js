import React, { useContext } from "react";

import { ShoppingCartContext } from "../pages/Shopping";
import useUpdatedCartItems from "../hooks/useUpdatedCartItems";
import OfferAppliedLabel from "./OfferAppliedLabel";

/**
 * Renders the Cart component with updated cart items and total cart cost.
 * If cart is empty, displays a message indicating that the cart is empty.
 * @returns {JSX.Element} The rendered Cart component.
 */
const Cart = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const { updatedItems, totalCartCost } = useUpdatedCartItems(cartItems);

  return (
    <div className="cart-container">
      <h3 className="d-flex justify-content-center">Cart</h3>
      {updatedItems.length ? (
        <div className="item-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity x Price per unit</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {updatedItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <OfferAppliedLabel
                      offer={item.offerAvailable}
                      quantity={item.quantity}
                    />
                    {`${item.quantity}Q x ${item.cost}p`}
                  </td>
                  <td>{item.totalCost}p</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">Total Cart cost : {totalCartCost}p</div>
        </div>
      ) : (
        <div className="cart-empty">Cart is empty !</div>
      )}
    </div>
  );
};

export default Cart;
