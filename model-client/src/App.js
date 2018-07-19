import React, {Component, Fragment} from 'react';
import {Container, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import Prediction from "./components/Prediction/Prediction";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import classnames from 'classnames';
import Visualizations from "./components/Visualizations/Visualizations";

class App extends Component {
  state = {
    activeTab: "1"
  };

  toggle(tabId) {
    if (this.state.activeTab !== tabId) {
      this.setState({
        activeTab: tabId
      });
    }
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <h1>Salary Prediction</h1>
        </header>
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}>
                Predict
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}>
                Visualize Data
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Prediction/>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2">
              <Visualizations/>
            </TabPane>
          </TabContent>
        </Container>
      </Fragment>
    );
  }
}

export default App;
