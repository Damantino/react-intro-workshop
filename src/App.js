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
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/other">other</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/other">
              <h1>Lorem Ipsum</h1>
            </Route>
            <Route path="/">
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
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
