import React from "react";
import Card from "./Card";

export default function CardList(props) {
  return (
    (props.list && (
      <div>
        {props.list.map((person) => (
          <Card key={person.name}>
            {person.name} {person.lastName}
          </Card>
        ))}
      </div>
    )) || <div>No users!</div>
  );
}
