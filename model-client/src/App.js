import React, {Component, Fragment} from 'react';
import { Container } from 'reactstrap';
import Prediction from "./components/Prediction";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <h1>Salary Prediction</h1>
        </header>
        <Container>
          <Prediction/>
        </Container>
      </Fragment>
    );
  }
}

export default App;
