import { fireEvent, render, screen } from "@testing-library/react";
import React, { useContext, useState } from "react";
import ItemList from "../../components/ItemList";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
  useState: jest.fn(),
}));

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

describe("ItemList component", () => {
  it("should render ItemList component", () => {
    useContext.mockReturnValue({ cartItems });
    useState.mockReturnValueOnce([false, jest.fn()]);

    render(<ItemList />);

    const itemListElement = screen.getByText("35p per item");
    expect(itemListElement).toBeInTheDocument();
  });

  it("should add item in context", () => {
    const mockSetCartItems = jest.fn();

    useContext.mockReturnValue({
      cartItems: cartItems,
      setCartItems: mockSetCartItems,
    });
    useState.mockReturnValueOnce([false, jest.fn()]);

    render(<ItemList />);

    const addItemButton = screen.getAllByRole("button", { name: "Add" })[0];
    expect(addItemButton).toBeInTheDocument();

    fireEvent.click(addItemButton);
    const itemAddedTextElement = screen.getByText("Item added in cart !");
    expect(itemAddedTextElement).toBeInTheDocument();
  });
});
