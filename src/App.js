import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Message from "./Person/Message";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    persons: [{ name: "(What?)" }],
    message: [{ message: "(Your Message)" }]
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [{ name: event.target.value }]
    });
  };

  messageChangeHandler = event => {
    this.setState({
      message: [{ message: event.target.value }]
    });
  };

  consoleLogButton = () => {
    console.log(this.state.message[0].message);
  };

  render() {
    return (
      <div className="App">
        <div className="Instruction">
          <h1>React Assignment - Part 1</h1>
          <p>Create a person component that takes a name and a phrase.</p>
          <p>
            The person component displays the name in H1 and has a button that
            when clicked console logs the phrase:
          </p>
        </div>

        <Person
          name={this.state.persons[0].name}
          changed={this.nameChangeHandler}
        />
        <Message
          message={this.state.message[0].message}
          changedMessage={this.messageChangeHandler}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.consoleLogButton}
        >
          Click Me!
        </Button>
      </div>
    );
  }
}

export default App;
