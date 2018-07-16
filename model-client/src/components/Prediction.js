import React, {Component} from  'react';
import { Row, Col } from 'reactstrap';

class Prediction extends Component {

  render() {
    return (
      <Row>
        <Col xs="12">
          <Col xs="3">
            <p className="App-intro">
              Enter the number of years:
            </p>
          </Col>
          <Col xs="3">
            <input type="text" />
          </Col>
        </Col>
      </Row>
    );
  }
}

export default Prediction;