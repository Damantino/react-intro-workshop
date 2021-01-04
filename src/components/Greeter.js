// You can destructure useEffect as { useEffect } as it lives within the same module and
// You have already seen in the node.js / ES6 workshop

import React from "react";

function Greeter(props) {
  const greetingText = `Hello ${props.name} ${props.emoji}`;
  const farewellText = `Bye ${props.name} ${props.emoji}`;

  /**
   * 1.1 Make use of `useEffect` from react
   * 1.2 Pass into it a new lambda.
   * 1.3 Create your effect - a.k.a side effect that this component should do
   * during its lifecycle. For this example we will set the document title to the
   * greetingText
   * 1.4 Return within that same function a cleanup function.
   * 1.5 This cleanup function will set the document title to the farewellText
   * 1.6 Include inside the dependency array both props, name and emoji.
   */

  return <div>{greetingText}</div>;
}

export default Greeter;
