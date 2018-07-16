import React, {Component, Fragment} from  'react';
import { Row, Col, Button } from 'reactstrap';
import axios from "../utils/axios-model";

class Prediction extends Component {
  state = {
    predictedSalary: '',
    years: ''
  };

  predict = () => {
    axios.get(`/${this.state.years}`)
      .then(response => this.setState({predictedSalary: response.data}))
      .catch(response => {
        console.log(response);
      });
  };

  yearsChanged = e => this.setState({years: e.target.value});

  render() {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    let prediction = "";

    if(this.state.predictedSalary) {
      prediction = (<Row>
        <Col xs="6">
          <p>You should earn {formatter.format(this.state.predictedSalary)}</p>
        </Col>
      </Row>);
    }

    return (
      <Fragment>
        <Row>
          <Col xs="6">
            <p className="App-intro">
              Enter the number of years:
            </p>
          </Col>
          <Col xs="6">
            <input type="text" onChange={this.yearsChanged}/>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <Button onClick={e => this.predict(this.state.predictedSalary)} color="primary">Predict</Button>
          </Col>
        </Row>
        {prediction}
      </Fragment>
    );
  }
}

export default Prediction;