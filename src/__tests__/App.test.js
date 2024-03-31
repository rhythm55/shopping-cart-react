import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render shopping component", () => {
    const { getByText } = render(<App />);

    const shoppingItemElement = getByText("Items");
    expect(shoppingItemElement).toBeInTheDocument();

    const shoppingCartElement = getByText("Cart");
    expect(shoppingCartElement).toBeInTheDocument();
  });
});
