import React from "react";

export default function Title(props) {
  return (
    <h1 className="Title text-center">{!props.text ? "Title" : props.text}</h1>
  );
}
