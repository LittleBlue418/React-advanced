import React, { Component, Fragment } from 'react';
// import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';


class Person extends Component {
  render() {
    //console.log('[Person.js] rendering...')
    return (
      <Fragment>
        <div key="div" className={classes.Person}>
          < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
          < p > {this.props.children}</p >
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
        <p key="heading">-</p>
      </Fragment>
    )
  }
};

export default Person;