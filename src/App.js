import Card from "./components/Card";
import CardList from "./components/CardList";
import Greeter from "./components/Greeter";
import PersonDetails from "./components/PersonDetails";

function App() {
  const peopleList = [
    { name: "kanye", lastName: "west" },
    { name: "jacques", lastName: "berman" },
  ];

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
      <CardList list={peopleList} />
    </div>
  );
}

export default App;
