import Card from "./components/Card";
import Greeter from "./components/Greeter";
import PersonDetails from "./components/PersonDetails";

function App() {
  // @hint make sure to create a list of people and include kanye west

  return (
    <div>
      <Greeter name="Assembler" emoji="🖐" />
      <PersonDetails
        user={{
          name: "John",
          lastName: "Doe",
          favoriteGenre: "EDM",
        }}
        sayCatchPhrase={() => console.log("Howdy!")}
      />
      <Card>
        <h1>Hi there!</h1>
        <p>I am inside a card</p>
        <Greeter name="Jane Doe" emoji="🎈" />
      </Card>
      {/* Implement CardList component */}
    </div>
  );
}

export default App;
