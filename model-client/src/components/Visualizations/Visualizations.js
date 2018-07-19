import React, {Component, Fragment} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import BarChart from "./BarChart";
import axios from "../../utils/axios-data";
import _map from "lodash/map";
import ScatterChart from "./ScatterChart";

class Visualizations extends Component {
  state = {
    data: [],
    dropDownOpen: false,
    chartType: "bar",
  };

  componentDidMount() {
    axios.get("")
      .then(response => {
        let data = _map(response.data, d => {
          return {
            ...d,
            label: `Year: ${d.yearsExperience} \n Salary: ${this.props.formatter.format(d.salary)}`
          }
        });

        this.setState({data: data})
      })
      .catch(response => console.log(response));
  }

  toggle = () => {
    this.setState(prevState => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  };

  setChartType = type => {
    this.setState({chartType: type})
  };

  render() {
    let chart = this.state.chartType === "bar" ?
      <BarChart data={this.state.data}/> :
      <ScatterChart data={this.state.data}/>;

    return (
      <Fragment>
        <Dropdown className="text-center p-2" isOpen={this.state.dropDownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Chart Type
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.setChartType("bar")}>Bar</DropdownItem>
            <DropdownItem onClick={() => this.setChartType("scatter")}>Scatter</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {chart}
      </Fragment>
    );
  }
}

export default Visualizations;