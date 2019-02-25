import React from "react";
import Button from "@material-ui/core/Button";
import { checkPropTypes } from "prop-types";

const message = props => {
  return (
    <div>
      <textarea
        cols="30"
        rows="10"
        onChange={props.changedMessage}
        value={props.message}
      />

      <h3>
        And <br />
        {props.message}
      </h3>
    </div>
  );
};

export default message;
