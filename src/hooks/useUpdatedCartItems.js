/**
 * Merges the items with the same id and updates the quantity.
 * Evaluates totalCost of item as per the applicable offer and quantity.
 * Calculates totalCartCost.
 * @param {Object[]} cartItems - The array of cart items, each item in the format
 * [{id: 1, name: apple}, {id: 1, name: apple}, {id: 2, name: banana}]
 * @returns {Object} An object containing the updated items array and the total cart cost.
 */
const useUpdatedCartItems = (cartItems) => {
  const handleCartItemsUpdate = () => {
    const itemHasMap = {};
    const mergeCartItems = cartItems.reduce((acc, curr) => {
      const accItemIndex = itemHasMap[curr.id];

      if (accItemIndex >= 0) {
        const updatedItemQuantity = acc[accItemIndex].quantity + 1;
        acc[accItemIndex] = {
          ...acc[accItemIndex],
          quantity: updatedItemQuantity,
        };
      } else {
        acc = [...acc, { ...curr, quantity: 1 }];
        itemHasMap[curr.id] = acc?.length - 1;
      }
      return acc;
    }, []);

    let totalCartCost = 0;
    const updatedItems = mergeCartItems.map((item) => {
      const totalCost = item.offerAvailable?.length
        ? getCostAfterOfferApplied(
            item.offerAvailable,
            item.quantity,
            item.cost
          )
        : item.quantity * item.cost;
      totalCartCost += totalCost;
      return { ...item, totalCost: totalCost };
    });

    return { updatedItems, totalCartCost };
  };

  /**
   * evaluates the total cost of item based on applicable offers and quantity
   * @param {*} offerAvailable offers available on item ex: threeForPriceOfTwo / buyOneGetOneFree
   * @param {*} quantity quantity of each item
   * @param {*} cost cost per item
   * @returns
   */
  const getCostAfterOfferApplied = (offerAvailable, quantity, cost) => {
    switch (offerAvailable) {
      case "threeForPriceOfTwo":
        if (quantity >= 3) {
          const quantityAfterOffer =
            2 * Math.floor(quantity / 3) + (quantity % 3);
          return quantityAfterOffer * cost;
        }
        return quantity * cost;
      case "buyOneGetOneFree":
        if (quantity >= 2) {
          const quantityAfterOffer = Math.floor(quantity / 2) + (quantity % 2);
          return quantityAfterOffer * cost;
        }
        return quantity * cost;
      default:
        return cost;
    }
  };

  return handleCartItemsUpdate();
};

export default useUpdatedCartItems;
