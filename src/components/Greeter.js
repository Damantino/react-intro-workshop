import React from "react";

function Greeter(props) {
  // 1.1 Import / Use `useState` hook from react to create a local state based on the `prop.name`
  // 1.2 Once you have access to the name in the state, use it below instead of props.name
  const greetingText = `Hello ${props.name} ${props.emoji}`;
  const farewellText = `Bye ${props.name} ${props.emoji}`;

  React.useEffect(() => {
    document.title = greetingText;

    return () => {
      document.title = farewellText;
    };
    // 2. Make sure to add the name state to the dependency array, as when it changes, we want
    // The side effect to run.
  }, [props.name, props.emoji]);

  /**
   * 3. Create a new function that calls the `setName` function with the new value of the input
     @hint remember you can access the new value of the input from the event
   */

  return (
    <div>
      <h1>{greetingText}</h1>
      {/* 4. Create a new input and add a new onChange event handler to it. It should call the function
        defined on step 2
      */}
    </div>
  );
}

export default Greeter;
