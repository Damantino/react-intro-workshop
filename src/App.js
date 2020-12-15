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
    </div>
  );
}

export default App;
