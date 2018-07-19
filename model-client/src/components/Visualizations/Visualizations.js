import React, {Component} from "react";
import BarChart from "./BarChart";
import axios from "../../utils/axios-data";

class Visualizations extends Component {
  state = {
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.setState({isLoading: true});

    axios.get("")
      .then(response => this.setState({data: response.data}))
      .catch(response => console.log(response));
  }

  render() {
    return (
      <BarChart data={this.state.data}/>
    );
  }
}

export default Visualizations;