import useUpdatedCartItems from "../../hooks/useUpdatedCartItems";

describe("useUpdatedCartItems", () => {
  const cartItems = [
    {
      id: 1,
      name: "Apple",
      cost: 35,
      offerAvailable: null,
    },
    {
      id: 2,
      name: "Banana",
      cost: 20,
      offerAvailable: null,
    },
    {
      id: 3,
      name: "Melon",
      cost: 50,
      offerAvailable: "buyOneGetOneFree",
    },
    {
      id: 3,
      name: "Melon",
      cost: 50,
      offerAvailable: "buyOneGetOneFree",
    },
    {
      id: 4,
      name: "Lime",
      cost: 15,
      offerAvailable: "threeForPriceOfTwo",
    },
    {
      id: 4,
      name: "Lime",
      cost: 15,
      offerAvailable: "threeForPriceOfTwo",
    },
    {
      id: 4,
      name: "Lime",
      cost: 15,
      offerAvailable: "threeForPriceOfTwo",
    },
  ];

  it("should return updated items with applicable offers value and total cart cost", () => {
    const { updatedItems, totalCartCost } = useUpdatedCartItems(cartItems);

    expect(updatedItems).toHaveLength(4);
    expect(totalCartCost).toBe(135);

    const melonItem = updatedItems.find((item) => item.id === 3);
    expect(melonItem.totalCost).toBe(50);
    expect(melonItem.quantity).toBe(2);

    const limeItem = updatedItems.find((item) => item.id === 4);
    expect(limeItem.totalCost).toBe(30);
    expect(limeItem.quantity).toBe(3);
  });
});
