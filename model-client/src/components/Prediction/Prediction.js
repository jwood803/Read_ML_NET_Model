import React, {Component, Fragment} from  'react';
import { Row, Col, Button } from 'reactstrap';
import axios from "../../utils/axios-model";

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
        <Col xs={{size: 6, offset: 4}}>
          <p className="margin-left">You should earn {formatter.format(this.state.predictedSalary)}</p>
        </Col>
      </Row>);
    }

    return (
      <Fragment>
        <Row>
          <Col xs={{size: 3, offset: 3}}>
            <p className="top-margin">
              Enter the number of years:
            </p>
          </Col>
          <Col xs="1">
            <input className="top-margin" type="text" onChange={this.yearsChanged}/>
          </Col>
        </Row>
        <Row className="form-group">
          <Col xs={{size: 2, offset: 5}}>
            <Button onClick={() => this.predict(this.state.predictedSalary)} color="primary">Predict</Button>
          </Col>
        </Row>
        {prediction}
      </Fragment>
    );
  }
}

export default Prediction;