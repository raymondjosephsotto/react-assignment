import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class App extends Component {
  state = {
    new_person: "",
    persons: [
      { name: "Ray", phrase: "I really like react!" },
      { name: "Rob", phrase: "I love coffee!" },
      { name: "Tricer", phrase: "I love food!" }
    ]
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ new_person: value });
  };

  addNewPerson = () => {
    const { new_person, persons } = this.state;
    const new_persons = [
      { name: new_person, phrase: "I want to code" },
      ...persons
    ];

    this.setState({ new_person: "", persons: new_persons });
  };

  render() {
    const { persons, new_person } = this.state;
    return (
      <div className="App">
        <TextField value={new_person} onChange={this.handleChange} />
        <Button variant="contained" color="primary" onClick={this.addNewPerson}>
          Add person
        </Button>
        {persons.map(person => (
          <Person name={person.name} phrase={person.phrase} />
        ))}
      </div>
    );
  }
}

export default App;
