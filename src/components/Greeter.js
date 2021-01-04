import React from "react";

function Greeter(props) {
  const [name, setName] = React.useState(props.name);
  const greetingText = `Hello ${name} ${props.emoji}`;
  const farewellText = `Bye ${name} ${props.emoji}`;

  React.useEffect(() => {
    document.title = greetingText;

    return () => {
      document.title = farewellText;
    };
  }, [name, props.emoji]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>{greetingText}</h1>
      <input
        type="text"
        placeholder="Type your name here"
        onChange={handleChangeName}
      />
    </div>
  );
}

export default Greeter;
