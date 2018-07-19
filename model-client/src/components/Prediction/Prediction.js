import React, {Component, Fragment} from  'react';
import { Row, Col, Button } from 'reactstrap';
import axios from "../../utils/axios-model";
import Spinner from "../UI/Spinner/Spinner";

class Prediction extends Component {
  state = {
    predictedSalary: '',
    years: '',
    isLoading: false,
  };

  predict = () => {
    this.setState({isLoading: true});

    axios.get(`/${this.state.years}`)
      .then(response => this.setState({predictedSalary: response.data, isLoading: false}))
      .catch(response => {
        console.log(response);
      });
  };

  yearsChanged = e => this.setState({years: e.target.value});

  render() {
    let prediction = "";

    if(this.state.predictedSalary) {
      prediction = (<Row>
        <Col xs={{size: 6, offset: 4}}>
          <p className="margin-left">You should earn {this.props.formatter.format(this.state.predictedSalary)}</p>
        </Col>
      </Row>);
    }
    else if (this.state.isLoading) {
      prediction = <Spinner />
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