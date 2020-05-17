import React from 'react';

import classes from './Scenario.module.css';
import Add from './../UI/Add/Add';

const scenario = (props) => {
  return (
    <div className={classes.Scenario}>
      <div className={classes.Title}>
        <p className={classes.Text}>Numele scenariului:</p>
        <input></input>
      </div>
      <div className={classes.Description}>
        <p className={classes.Text}>Descrierea scenariului:</p>
        <input></input>
      </div>
      <Add clicked={props.addScenarioClicked}>Creează o întrebare nouă</Add> 
    </div>
  );
}

export default scenario;