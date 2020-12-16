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

## Iteration 01

- What is a component?
- Creating our `App` component
- Creating a new `Greeter` component
- What is a prop?
- Using `props` to customize a component
- Using components as building-blocks

## Iteration 02

- Passing things as `props`
  - Objects
  - Functions
- Event listeners in React
  - on`<Event>`, _for example_ `onClick`

## Iteration 03

- The `children` prop and how we can compose components
- Creating a `Card` component
- Passing components as children