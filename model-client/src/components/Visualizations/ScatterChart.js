import React, {Component} from "react";
import {VictoryChart, VictoryScatter, VictoryAxis, VictoryTooltip} from "victory";
import _rangeRight from "lodash/rangeRight";

class ScatterChart extends Component {
  render() {
    let {
      data
    } = this.props;

    return (
      <VictoryChart
        domainPadding={30}
      >
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
        <VictoryScatter
          data={data}
          labelComponent={<VictoryTooltip/>}
          x="yearsExperience"
          y="salary"
          style={{
            data: { fill: "green" }
          }}
        />
      </VictoryChart>
    );
  }
}

export default ScatterChart;