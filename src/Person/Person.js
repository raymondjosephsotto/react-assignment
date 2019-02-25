import React from "react";
import Button from "@material-ui/core/Button";
import { checkPropTypes } from "prop-types";

const person = props => {
  return (
    <div>
      Name: <input type="text" onChange={props.changed} value={props.name} />
      <h1>Hi! My name is {props.name}</h1>
    </div>
  );
};

export default person;
