import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Prediction from "./components/Prediction";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <header className="header">
          <h1>Salary Prediction</h1>
        </header>
        <Prediction/>
      </Container>
    );
  }
}

export default App;
