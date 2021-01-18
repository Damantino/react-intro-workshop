# React intro workshop

![Assembler School Logo](https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5d7ac68da9740c393a589ee7_logo_org_1.png)

The following workshop is a comprehensive react intro. We will cover all the basics concepts such as `componetization`, `legacy react`, `future react with hooks`, `state`, `component life cycle`.

## Getting Started

In order to move along with the workshop:

clone this repository

```sh
git clone https://github.com/assembler-school/react-intro-workshop.git
```

Install dependencies

```sh
yarn
```

or

```sh
npm i
```

Head over to the first branch `iteration-01`

```sh
git checkout iteration-01
```

Run the tests, all of them should fail ❌

We're going to practice through [TDD](<https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven%20development%20(TDD),software%20against%20all%20test%20cases.>)

```sh
yarn test <name-of-iteration>
```

or

```sh
npm test <name-of-iteration>
```

Code until the all tests pass ✅

Get stuck? 💡

Try moving to the solution branch for that iteration:

```sh
git checkout iteration-01-solution
```

Check the code, and come back to your branch

## What is React?

React is a JavaScript library for building user interfaces. It is an open-source, component-based, front-end library responsible only for the application’s view layer.

React is the most popular front-end JavaScript library in the field of web development.
React was created by Jordan Walke, a software engineer at Facebook.

Let’s take a look at an Instagram webpage example, entirely built using React, to get a better understanding of how React works.

![](https://i.imgur.com/Oh5BUgF.png)

As the illustration shows, React divides the UI into multiple components, which makes the code easier to debug. This way, each component has its property and function.

This would be an example of what that would look like in `JSX`

```jsx
function App() {
  return (
    <div className="App">
      <Search />
      <ProfileDescription />
      <Stories />
      <SinglePost />
      <PostList />
    </div>
  );
}
```

## Why use react?

- Improved performance: React uses Virtual DOM and compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do.
- Reusable components: Components can be reused throughout the application, which in turn dramatically reduces the application’s development time.
- Unidirectional data flow: When designing a React app, developers often nest child components within parent components and it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.
- Small learning curve
- It can be used for the development of both web and mobile apps: There is a framework called React Native, derived from React itself, that is used for creating beautiful mobile applications.
- Dedicated tools for easy debugging: React also has a Chrome extension that can be used to debug React applications.

## Creating a react app

To start using React we only need to install the official Create React App package.

```sh
npm i -g create-react-app
```

Command to create react app

```sh
create-react-app myapp
```

## JSX

JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. This makes the code easier to understand and debug, as it avoids the usage of complex JavaScript DOM structures.

JSX Example:

```jsx
const name = "Josh Perez";

const element = <h1>Hello, {name}</h1>;

<PostList />;
```

## Specifying Attributes with JSX

- You may use quotes to specify string literals as attributes.
- You may also use curly braces to embed a JavaScript expression in an attribute.

```jsx
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;
```

## Specifying Children with JSX

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## Render

The render() function in the HelloWorld component looks like it's returning HTML, but this is actually JSX. The JSX is translated to regular JavaScript at runtime. That component, after translation, looks like this:

```jsx
const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

## Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

The simplest way to define a component is to write a JavaScript function:

```jsx
const Welcome = (props) => {
  return <h3>Hello {props.name}</h3>;
};
```

## What is props?

React is a component-based library which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.

“props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

```jsx
function Welcome(props) {
  return <h1>Hello {this.props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome name="Assembler" />
    </div>
  );
}

// Or using classes

class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

## State

Like props, state holds information about the component. However, the kind of information and how it is handled is different.

By default, a component has no state. The Welcome component from the example is stateless:

### So when would you use state?

When a component needs to keep track of information between renderings the component itself can create, update, and use state.

We’ll be working with a fairly simple component to see state working in action.

Changing the state should only be done from inside a component through the method `this.setState()` if working with a class component, or through the `useState` hook if functional.
React exposes setState on the component instance to update it so that react finds out data change and can re-render the view.

For example:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hi",
      counter: 2,
    };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return <span onClick={this.increment}>{this.state.counter}</span>;
  }
}

// Or using functional components

function Counter() {
  const [count, setCount] = useState(0);

  return <span onClick={() => setCount((count) => count + 1)}>{count}</span>;
}
```

## Lifecycles

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

### Mounting

Mounting means putting elements into the DOM. React has several built-in methods that gets called, in this order, when mounting a component, but these are the common ones:

`constructor()`
`render()`
`componentDidMount()`

The `render()` method is required and will always be called, the others are optional and will be called if you define them.

The `componentDidMount()` method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

For example, at first this component's text color will be red, but after one second, it will be yellow

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}
```

### Updating

The next phase in the lifecycle is when a component is updated.
A component is updated whenever there is a change in the component's state or props.

React calls the following methods, in this order, when a component is updated:
render()
componentDidUpdate()

The render() method is required and will always be called, the others are optional and will be called if you define them.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}
```

![](https://imgur.com/VYmcEom.gif)

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount()

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  handleRemove = () => this.setState({ show: false });

  render() {
    return (
      <div>
        {this.state.show ? <Example /> : null}
        <button onClick={this.handleRemove}>Delete Example</button>
      </div>
    );
  }
}
```

```jsx
class Example extends React.Component {
  componentWillUnmount() {
    alert("Example component is about to be unmounted.");
  }
  render() {
    return <h1>Hello Assembler!</h1>;
  }
}
```

![](https://imgur.com/60NQV9o.gif)

---

## Iteration 01

In this iteration we will create our first Component and app it to out App component, to display it.

First of all - navigate to `src/components/Greeter.js` and create a new functional (or class) component, that receives two props. The name, and an emoji.

Once you are done, export it. Then import it in the App component, and render it with render the name prop as [`Assembler`] and the emoji as [`🖐`] in `src/App.js`

Key takeaways:

- What is a component?
- Creating our `App` component
- Creating a new `Greeter` component
- What is a prop?
- Using `props` to customize a component
- Using components as building-blocks

---

## Iteration 02

We have already seen that you can pass primitive types as props (Strings, Numbers...etc), but you can also pass as props complex data structures such as Objects with data inside.

You can also pass `functions` as props, so that you can customize your component's behavior.

Navigate to `./src/components/PersonDetails.js`, and create a new component that accepts an `user` object with the fields:

```js
user = {
  name: "John",
  lastName: "Doe",
  favoriteGenre: "EDM",
};
```

And display each field in the component.

Then, add a button, which receives the prop `sayCatchPhrase` and inside the `onClick` event of that button, call that function

Finally add a 'say catch phrase' text to the button.

Make sure to add the `PersonDetails` component to the App! Also, give it the needed props.

Key takeaways:

- More about `props`
  - Objects
  - Functions
- Event listeners in React
  - on`<Event>`, _for example_ `onClick`

---

## Iteration 03

In this iteration we will be working with children nodes.

Navigate to `src/components/Card.js` and
fill this component to be able to print children inside a `div` with a className of `card-wrapper`

Make sure to add your `Card` component to the App, and give it some children. For instance an H2, and a `Greeter` component

- The `children` prop and how we can compose components
- Creating a `Card` component
- Passing components as children

---

## Iteration 04

In this iteration we will learn how to create components dynamically with data.

Navigate to `/src/components/CardList.js`

and fill the component so that it iterates through `list ` of people given by `props`.

Each person on the list can have a `name` and a `lastName`.

Make sure that there's people in the list, otherwise render `<div>No users!</div>`

Then add this new component to your App, and give the list some values.

Key takeaways:

- Iterating through `data` in a `component`
- Mapping `data` to `components`
- Conditional rendering

## Iteration 05

We're going to be working with lifecycles on this iteration. For this, we will revisit the `Greeter` component.

Navigate to `src/components/Greeter.js`

Add a useEffect hook such that every time the component is mounted, it changes the document's title.

Also, make sure that whenever it is unmounted it adds another text.

The texts are given by the `greetingText` and `farewellText` respectively.

Key takeaways:

- What is a `lifecycle`?
- Intro to hooks
  - `useEffect`
    - mount
    - unmount
    - update

## Iteration 06

On this iteration we will be working with component `state`.

Navigate to `src/components/Greeter.js`

Making use of `useState`, make your component stateful such that it has the ability to display and update a name. The original state of this name should be the one given by `props`

Create a new input on the component and add to it an `onChange` event handler. This should call a function that updates the name

Key takeaways:

- Into to state
- useState hook
