import { render, screen } from "@testing-library/react";
import App from "../App";
import CardList from "../components/CardList";

const peopleList = [
  { name: "John", lastName: "Doe" },
  { name: "Jane", lastName: "Doe" },
];

describe("iteration-04", () => {
  it("should render a list of cards when given a list of users", () => {
    render(<CardList list={peopleList} />);
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  });

  it("should not render a list of cards when no users", () => {
    render(<CardList />);
    expect(screen.getByText(/No users!/i)).toBeInTheDocument();
  });

  it("should render a list of users in App", () => {
    render(<App />);
    expect(screen.getByText(/kanye west/i)).toBeInTheDocument();
  });
});
