import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserInputBox from '../components/UserInputBox/UserInputBox'
import LetterCards from '../components/LetterCards/LetterCards';
// import WithClass from '../hoc/WithClass';
import withClass2 from '../hoc/WithClass2';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('[App.js] constructor');
  //   // this.state = (state below) <- another way of setting state
  // }

  state = {
    persons: [
      { id: 'sbv7a', name: 'Holly', age: 32, hobbies: 'Writing' },
      { id: 'lnx4', name: 'Martin', age: 41, hobbies: 'Programming' },
      { id: 'kc3nos', name: 'Morris', age: 11, hobbies: 'Sleeping' },
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true,
    userText: '',
    userTextArray: {},
    changeCounter: 0,
    authenticated: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentDidMount () {
  //   console.log('[App.js] componentDidMount')
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate')
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('[App.js] componentDidUpdate')
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  userEnteredText = (event) => {
    const newUsertext = event.target.value;

    const newUserTextArray = []
    let index = 0;

    for (let letter in event.target.value) {
      newUserTextArray.push({ id: index, letter: event.target.value[letter] })
      index++;
    }

    this.setState(
      this.state = {
        userText: newUsertext,
        userTextArray: newUserTextArray,
      }
    )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  deleteLetterCard = (event) => {
    const newUserTextArray = [...this.state.userTextArray];
    const newUserTextHolder = this.state.userText.split("");

    newUserTextArray.splice(event.value, 1);

    newUserTextHolder.splice(event.value, 1);

    const newUserText = newUserTextHolder.join("");

    this.setState(
      this.state = {
        userText: newUserText,
        userTextArray: newUserTextArray
      }
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    //console.log('[App.js] render')
    let persons = null;
    let letterCards = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    if (this.state.userTextArray.length > 0) {
      letterCards = (
        <LetterCards
          userTextArray={this.state.userTextArray}
          clicked={(event) => this.deleteLetterCard(event)}
        />
      )
    }


    return (
      //<WithClass classes={classes.App}>
      <Auxiliary>

        <UserInputBox
          changed={(event) => this.userEnteredText(event)}
          userText={this.state.userText}
          length={this.state.userTextArray.length} />

        {letterCards}

        {<button onClick={() => {
          this.setState({ showCockpit: false });
        }}
        >
          Remove Cockpit
          </button>}

        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>

          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}

          {persons}
        </AuthContext.Provider>

      </Auxiliary>
      //</WithClass>
    );
  }
}

export default withClass2(App, classes.App);
