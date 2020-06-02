import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass2 from '../../../hoc/WithClass2';


class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    //console.log('[Person.js] rendering...')
    return (
      //<Fragment>
      <Auxiliary>

          < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
          < p >My hobbie is: {this.props.hobbies}</p >
          <input
            key="i3"
            ref={(inputEl) => {this.inputElement = inputEl}}
            type="text"
            onChange={this.props.changed}
            value={this.props.name} />

        <p key="heading">-</p>
      </Auxiliary>
      //</Fragment>
    )
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.string,
  changed: PropTypes.func
};

export default withClass2(Person, classes.Person);