import React from "react";
import ReactDOM from "react-dom";

export default function Test(props) {
  return (
    <h1>안녕, {props.name}</h1>
  );
}

//const element = <Test name="인제" />;
//ReactDOM.render(element, document.getElementById("root"));
