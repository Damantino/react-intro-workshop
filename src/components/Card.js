import React from "react";
import './Card.css';

export default function Card(props) {
  return <div className="card-wrapper">{props.children}</div>;
}
