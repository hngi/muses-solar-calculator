import React, { Fragment, Component } from "react";
import "./scss/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Calculate from "./components/pages/Calculate";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";
import Form from './components/layout/Form';

export class App extends Component {
  state = {
    appliances: [
      { name: "", id: 0, quantity: 0, watts: 0, hours: 0 },
      { name: "", id: 1, quantity: 0, watts: 0, hours: 0 },
      { name: "", id: 2, quantity: 0, watts: 0, hours: 0 }
    ],
    showForm: false,
  };

  changeDetails = (id, name, value) => {
    this.setState({
      appliances: this.state.appliances.map(stuff => {
        if (stuff.id === id) {
          stuff[name] = value;
        }
        return stuff;
      })
    } );
    console.log(this.state.appliances)
  };

  add = name => {
    this.setState({showForm: true})
    console.log('about to add')
  }

  inject = ( name, id, quantity, watts, hours ) => {
    this.setState({appliances: [...this.state.appliances, {name, id, quantity, watts, hours}]})
  }

  falseForm = () => {
    this.setState({showForm: false})
  }

  reset = () => {
    this.setState({
      appliances: [
        { name: "", id: 0, quantity: 0, watts: 0, hours: 0 },
        { name: "", id: 1, quantity: 0, watts: 0, hours: 0 },
        { name: "", id: 2, quantity: 0, watts: 0, hours: 0 }
      ]
    });
    console.log('reset')
  }

  showResult = () => {
    const appliances = this.state.appliances
    console.log( 'here is your result, mofo' );
    // const first = ((parseInt(appliances[0].quantity) * parseInt(appliances[0].watts) * parseInt(appliances[0].hours)) /1000)
    // const second = ((parseInt(appliances[1].quantity) * parseInt(appliances[1].watts) * parseInt(appliances[1].hours)) /1000)
    // const third = ( ( parseInt( appliances[ 2 ].quantity ) * parseInt( appliances[ 2 ].watts ) * parseInt( appliances[ 2 ].hours ) ) / 1000 )
    // const total = first + second + third;
    // console.log( total.toFixed(2) );

    const totalArr = appliances.map( ( stuff ) => {
      return( (parseInt(stuff.quantity) * parseInt(stuff.watts) *parseInt(stuff.hours)) /1000);
    } )
    const sumArr = totalArr.reduce( ( a, b ) => a + b, 0 );
    const final = sumArr.toFixed(2)
    console.log( final );
  }

  render () {
    const numberOfAppliances = this.state.appliances.length;
    return (
      <Router>
        <div className="app">
          <Form showForm={this.state.showForm} falseForm={this.falseForm} numberOfAppliances={numberOfAppliances} inject={this.inject} />
          <Switch>
            <Route
              exact
              path="/calculate"
              render={props => (
                <Calculate
                  appliances={this.state.appliances}
                  changeDetails={this.changeDetails}
                  add ={this.add}
                  reset={this.reset}
                  showResult={this.showResult}
                  select={this.state.select}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
