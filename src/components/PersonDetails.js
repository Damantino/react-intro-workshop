import React from "react";

export default function PersonDetails(props) {
  return (
    <div>
      <h1>User information 🙍‍♀️🙍‍♂️</h1>
      <span>{`Name: ${props.user.name}`}</span>
      <span>{`Last name: ${props.user.lastName}`}</span>
      <span>{`Favorite music genre: ${props.user.favoriteGenre}`}</span>
      <button onClick={props.sayCatchPhrase}>Say catch phrase</button>
    </div>
  );
}
