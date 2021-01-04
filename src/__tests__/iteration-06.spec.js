import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeter from "../components/Greeter";

describe("iteration-06", () => {
  it("Should set the document title to the name when typed on an input", () => {
    render(<Greeter name="Assembler" emoji="🖐" />);
    expect(screen.getByText(/hello assembler/i)).toBeInTheDocument();
    userEvent.type(
      screen.getByPlaceholderText(/type your name here/i),
      "John Doe"
    );
    expect(document.title).toBe("Hello John Doe 🖐");
    expect(screen.getByText(/hello John Doe/i)).toBeInTheDocument();
  });
});
