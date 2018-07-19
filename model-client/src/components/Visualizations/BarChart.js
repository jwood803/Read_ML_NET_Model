import React, {Component} from "react";
import _rangeRight from "lodash/rangeRight";
import {VictoryChart, VictoryBar, VictoryAxis} from "victory";

class BarChart extends Component {
  render() {
    let {
      data
    } = this.props;

    return (
      <VictoryChart domainPadding={30} animate={{ duration: 2000 }}>
        <VictoryAxis
          tickValues={_rangeRight(1, 12, 1)}
          label="Years of Experience"
          style={{
            axis: {stroke: "#756f6a"},
            axisLabel: {fontSize: 12},
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 15, padding: 5}
          }}
        />
        <VictoryAxis
          dependentAxis
          offsetX={70}
          label="Salary"
          style={{
            axis: {stroke: "#756f6a"},
            axisLabel: {fontSize: 12, padding: 60},
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 15, padding: 5}
          }}
        />
        <VictoryBar
          data={data}
          x="yearsExperience"
          y="salary"
        />
      </VictoryChart>
    );
  }
}

export default BarChart;