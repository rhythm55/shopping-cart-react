import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../../components/Cart";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Cart component", () => {
  it("should render cart component with empty message", () => {
    const cartItems = [];
    useContext.mockReturnValue({ cartItems });
    render(<Cart />);

    const cartEmptyMessage = screen.getByText("Cart is empty !");
    expect(cartEmptyMessage).toBeInTheDocument();
  });

  it("should render cart component with cart items", () => {
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
        id: 4,
        name: "Lime",
        cost: 15,
        offerAvailable: "threeForPriceOfTwo",
      },
    ];
    useContext.mockReturnValue({ cartItems });
    render(<Cart />);

    const cartItemsElement = screen.getByRole("table");
    expect(cartItemsElement).toBeInTheDocument();

    const cartTableItemElement = screen.getByText("1Q x 35p");
    expect(cartTableItemElement).toBeInTheDocument();
  });
});
