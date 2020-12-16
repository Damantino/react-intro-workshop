import Card from "./components/Card";
import Greeter from "./components/Greeter";
import PersonDetails from "./components/PersonDetails";

function App() {
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
    </div>
  );
}

export default App;
