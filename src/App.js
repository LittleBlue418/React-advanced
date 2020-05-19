import React, { Component } from 'react';
import classes from './App.module.css';

import Person from './Person/Person';
import UserInputBox from './UserInputBox/UserInputBox'
import LetterCard from './LetterCard/LetterCard';


class App extends Component {
  state = {
    persons: [
      { id: 'sbv7a', name: 'Holly', age: 32, hobbies: 'Writing' },
      { id: 'lnx4', name: 'Martin', age: 41, hobbies: 'Programming' },
      { id: 'kc3nos', name: 'Morris', age: 11, hobbies: 'Sleeping' },
    ],
    otherState: 'Some other value',
    showPersons: false,
    userText: '',
    userTextArray: {},
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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

  deleteLetterCard = (cardIndex) => {
    const newUserTextArray = [...this.state.userTextArray];
    const newUserTextHolder = this.state.userText.split("");

    newUserTextArray.splice(cardIndex, 1);

    newUserTextHolder.splice(cardIndex, 1);

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

  render() {
    let persons = null;
    let letterCards = null;

    let btnClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
                <Person
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}

                  changed={(event) => this.nameChangedHandler(event, person.id)} />
            )

          })}
        </div>
      );

      btnClasses.push(classes.Red);
    }

    if (this.state.userTextArray.length > 0) {
      letterCards = (
        <div>
          {this.state.userTextArray.map((letterObject, index) => {
            return <LetterCard
              click={() => this.deleteLetterCard(index)}
              letter={letterObject.letter}
              key={letterObject.id} />
          })}
        </div>
      )
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>

          <UserInputBox
            changed={(event) => this.userEnteredText(event)}
            userText={this.state.userText}
            length={this.state.userTextArray.length} />

          {letterCards}

          <h1>The Fam</h1>
          <p className={assignedClasses.join(' ')}>The family members!</p>
          <button
            className={btnClasses.join(' ')}
            onClick={this.togglePersonsHandler}>
              Show People
          </button>


          {persons}

        </div>
    );
  }
}

export default App;
