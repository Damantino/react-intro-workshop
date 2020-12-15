import PersonDetails from "../components/PersonDetails";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("iteration-02", () => {
  beforeEach(() => {
    render(
      <PersonDetails
        user={{
          name: "John",
          lastName: "Doe",
          favoriteGenre: "EDM",
        }}
        sayCatchPhrase={() => console.log("Howdy!")}
      />
    );
  });
  it("should render a person with its name", () => {
    expect(screen.getByText(/name: john/i)).toBeInTheDocument();
  });
  it("should render a person with its lastName", () => {
    expect(screen.getByText(/last name: doe/i)).toBeInTheDocument();
  });
  it("should render a person with its music genre", () => {
    expect(screen.getByText(/favorite music genre: edm/i)).toBeInTheDocument();
  });
  it("should call catch phrase [Howdy!] on console log", () => {
    console.log = jest.fn();
    userEvent.click(screen.getByText(/say catch phrase/i));
    expect(console.log).toHaveBeenCalledWith("Howdy!");
  });
});

it("should have PersonDetails in App", () => {
  render(<App />);
  expect(screen.getByText(/name: john/i)).toBeInTheDocument();
});
