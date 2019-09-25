import React, { Component } from 'react'

export class Appliance extends Component {
  state = {
    name: '',
    quantity: 0,
    watts: 0,
    hours: 0
  }

  onChange = e => {
    // this.setState({[e.target.name]: e.target.value})
    this.props.changeDetails(this.props.id, e.target.name, e.target.value)
  }

  changeSelect = e => {
    this.setState( { name: e.target.value } )
  }
  render () {
    const { name, select, quantity, watts, hours } = this.props;
    return (
      <div className="appliance-item" style={{marginBottom: "3rem"}}>
        <div className="name">
          <select name="applianceName" id="name" required onChange={this.onChange}>
            {/* <option value="">Choose an appliance</option>
            {name &&  <option selected value={name}>{name}</option>}
            <option value="tv">Television</option>
            <option value="fridge">Refrigerator</option>
            <option value="ac">Air Conditioner</option>
            <option value="bulb">Bulb</option>
            <option value="cooker">Electric Cooker</option> */}
            {name ? (<option selected value={name}>{name}</option>) : (
             <> <option value="">Choose an appliance</option>
               <option value="tv">Television</option>
            <option value="fridge">Refrigerator</option>
            <option value="ac">Air Conditioner</option>
            <option value="bulb">Bulb</option>
            <option value="cooker">Electric Cooker</option></>
            )}
          </select>
        </div>
        <div className="quantity">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" value={quantity} name="quantity" id="quantity" min="0" onChange={this.onChange}/>
        </div>
        <div className="watts">
          <label htmlFor="watts">Watts</label>
          <input type="number" value={watts} name="watts" id="watts" min="0" onChange={this.onChange} />
        </div>
        <div className="hours">
          <label htmlFor="hours">Hours per day</label>
          <input type="number" value={hours} name="hours" id="hours" min="0" onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default Appliance

