import React from "react";
import Button from "@material-ui/core/Button";

const Person = ({ name, phrase }) => {
  return (
    <div>
      <h1>Hi! My name is {name}</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => console.log(phrase)}
      >
        Click me!
      </Button>
    </div>
  );
};

export default Person;
