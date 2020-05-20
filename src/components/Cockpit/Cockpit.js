import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClasses = [classes.Button,];


  if (props.showPersons) {
    btnClasses.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }


  return (
    <div className={classes.Cockpit}>
      <h1>The Fam</h1>
      <p className={assignedClasses.join(' ')}>The family members!</p>
      <button
        className={btnClasses.join(' ')}
        onClick={props.clicked}>
        Show People
      </button>
    </div>
  );
};

export default cockpit;