import { render, screen } from "@testing-library/react";
import App from "../App";
import Greeter from "../components/Greeter";

describe("iteration-01", () => {
  it("App component should be defined", () => {
    render(<App />);
    expect(screen.getByText(/Hello Assembler/)).toBeInTheDocument();
  });

  it("Greeter should receive a prop with the name and greet", () => {
    render(<Greeter name="Assembler" />);
    expect(screen.getByText(/Hello Assembler/)).toBeInTheDocument();
  });

  it("Greeter should receive a prop with the name and greet with an emoji", () => {
    render(<Greeter name="Assembler" emoji="🖐" />);
    expect(screen.getByText(/Hello Assembler 🖐/)).toBeInTheDocument();
  });

  it("App should use the greeter component", () => {
    render(<App />);
    expect(screen.getByText(/Hello Assembler 🖐/)).toBeInTheDocument();
  });
});
