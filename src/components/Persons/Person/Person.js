import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass2 from '../../../hoc/WithClass2';

import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    //console.log('[Person.js] rendering...')
    return (
      //<Fragment>
      <Auxiliary>

        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>

        < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
        < p >My hobbie is: {this.props.hobbies}</p >
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
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