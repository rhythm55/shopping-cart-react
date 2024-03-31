import React from "react";

import { offerAvailableList } from "../utils/constant";

/**
 * Renders a label indicating that an offer is applied to the item.
 * @param {string} props.offer - The offer available for the item.
 * @param {number} props.quantity - The quantity of the item.
 * @returns {JSX.Element} The rendered OfferAppliedLabel component.
 */
const OfferAppliedLabel = ({ offer, quantity }) => {
  return (
    <>
      {offerAvailableList[offer] &&
        offerAvailableList[offer].applicableToQuantity <= quantity && (
          <div className="offer-applied-label">
            <div>Offer Applied !</div>
            <div>{offerAvailableList[offer].name}</div>
          </div>
        )}
    </>
  );
};

export default OfferAppliedLabel;
