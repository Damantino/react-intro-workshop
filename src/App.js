// Import Card component 💡
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
      {/* 
         Implement Card, and use it here 💡
      */}
    </div>
  );
}

export default App;
