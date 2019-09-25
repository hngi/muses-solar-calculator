import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Appliances from '../appliances/Appliances';

export class Calculate extends Component {
  render() {
    const {add, reset, showResult} = this.props
    return (
      <div>
        <div className="calculate">
          <div className="nav-back">
            <Navbar />
            <h1>Muse Solar Calculator</h1>
          </div>
          <div className="calculate-main">

            <Appliances select={this.props.select} appliances={this.props.appliances} changeDetails={this.props.changeDetails} />

            <div className="buttons">
              <button onClick={add}>Add appliance</button>
              <button onClick={reset}>Reset</button>
              <button onClick={showResult}>Give me my solar report</button>
            </div>
            <div className="result">
              {this.props.final !== null && ( <p>You'll need {this.props.final}kwh of solar energy per daily to run your appliances</p>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;

