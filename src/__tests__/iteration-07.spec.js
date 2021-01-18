import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("iteration-07", () => {
  it("Should navigate to [/other] section and have a Lorem Ipsum text", () => {
    render(<App />);

    userEvent.click(screen.getByText("other"));
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
  });
});
