import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    id: this.props.numberOfAppliances,
    quantity: 0,
    watts: 0,
    hours: 0
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.falseForm();
    this.props.inject(
      this.state.name,
      this.state.id,
      this.state.quantity,
      this.state.watts,
      this.state.hours
    );
    this.setState({
      name: "",
      id: this.state.id + 1,
      quantity: 0,
      watts: 0,
      hours: 0
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, quantity, watts, hours } = this.state;
    return (
      this.props.showForm && (
        <div style={{ marginBottom: "3rem" }}>
          <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="name">Name of device: </label>
              <input
                onChange={this.onChange}
                value={name}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div>
              <label htmlFor="quantity">quantity: </label>
              <input
                onChange={this.onChange}
                value={quantity}
                type="number"
                name="quantity"
                id="quantity"
                required
                min="1"
              />
            </div>
            <div>
              <label htmlFor="watts">watts: </label>
              <input
                onChange={this.onChange}
                value={watts}
                type="number"
                name="watts"
                id="watts"
                required
                min="1"
              />
            </div>
            <div>
              <label htmlFor="hours">hours: </label>
              <input
                onChange={this.onChange}
                value={hours}
                type="number"
                name="hours"
                id="hours"
                required
                min="1"
              />
            </div>
            <input type="submit" value="Add" />
          </form>
        </div>
      )
    );
  }
}

export default Form;
