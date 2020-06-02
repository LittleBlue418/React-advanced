import React, { Component, Fragment } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass2 from '../../../hoc/WithClass2';


class Person extends Component {
  render() {
    //console.log('[Person.js] rendering...')
    return (
      //<Fragment>
      <Auxiliary>

          < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
          < p > {this.props.children}</p >
          <input type="text" onChange={this.props.changed} value={this.props.name} />

        <p key="heading">-</p>
      </Auxiliary>
      //</Fragment>
    )
  }
};

export default withClass2(Person, classes.Person);