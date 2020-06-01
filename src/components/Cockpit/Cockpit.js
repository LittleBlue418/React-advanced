import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout(() => {
        alert('saved data to cloud!')
      }, 1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect')
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
       console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      }
    });

     useEffect(() => {
       alert('first time loading')
     }, [])

  const assignedClasses = [];
  let btnClasses = [classes.Button,];


  if (props.showPersons) {
    btnClasses.push(classes.Red);
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }


  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>The family members!</p>
      <button
        className={btnClasses.join(' ')}
        onClick={props.clicked}>
        Show People
      </button>
    </div>
  );
};

export default React.memo(Cockpit);