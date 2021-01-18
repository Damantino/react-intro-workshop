import Card from "./components/Card";
import CardList from "./components/CardList";
import Greeter from "./components/Greeter";
import PersonDetails from "./components/PersonDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const peopleList = [
    { name: "kanye", lastName: "west" },
    { name: "jacques", lastName: "berman" },
  ];

  return (
    /**
     *   1. Wrap your current app inside a new Route, inside a Switch with a path of '/'
     *   2. Add a new Route with a path of '/other'
     *   3. Add navigation links making use of the <Link> component. Pass a "to" prop indicating the path to go to
     *   4. Make sure to have navigation for your home and the '/other' route
     *    @hint Keep in mind the order for the routes inside the switch. Your root route should be last.
     * */
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
