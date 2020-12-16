import Card from "../components/Card";
import App from "../App";

import { render, screen } from "@testing-library/react";

describe("iteration-03", () => {
  beforeEach(() => {
    render(
      <Card>
        <h1>Hello there!</h1>
        <p>I am a child</p>
      </Card>
    );
  });
  it("should render a child component in card with text [hello there]", () => {
    expect(screen.getByText(/hello there/i)).toBeInTheDocument();
  });
  it("should render a child component in card with text [I am a child]", () => {
    expect(screen.getByText(/i am a child/i)).toBeInTheDocument();
  });
});

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("should render a Card component in App", () => {
    expect(screen.getByText(/Hi there!/i)).toBeInTheDocument();
  });

  it("should render a Card component in App with a custom component as children", () => {
    expect(screen.getByText(/Hello Jane Doe 🎈/i)).toBeInTheDocument();
  });
});
