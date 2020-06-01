import React, { Component } from 'react';
import classes from './Person.module.css';


class Person extends Component {
  render() {
    //console.log('[Person.js] rendering...')
    return [
      <div key="div" className={classes.Person}>
        < p onClick = { this.props.click } > I'm {this.props.name} and I am {this.props.age} years old!</p>
        < p > { this.props.children }</p >
          <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>,
      <p key="heading">-</p>
    ]
  }
};

export default Person;