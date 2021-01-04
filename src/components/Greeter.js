import React from "react";

function Greeter(props) {
  const greetingText = `Hello ${props.name} ${props.emoji}`;
  const farewellText = `Bye ${props.name} ${props.emoji}`;

  React.useEffect(() => {
    document.title = greetingText;

    return () => {
      document.title = farewellText;
    };
  }, [props.name, props.emoji]);

  return <div>{greetingText}</div>;
}

export default Greeter;
