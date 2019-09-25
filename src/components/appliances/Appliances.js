import React, { Component } from 'react';
import Appliance from './Appliance';

export class Appliances extends Component {
  state = {
    // appliances: [
    //   1,2,3
    // ]
  }
  render () {
    return (
      <div>
        {
          this.props.appliances.map( ( appliance ) => ( <Appliance quantity={appliance.quantity} watts={appliance.watts} hours={appliance.hours} key={appliance.id} name={appliance.name} id={appliance.id} changeDetails={this.props.changeDetails} select={this.props.select} /> ))
        }
      </div>
    )
  }
}

export default Appliances

