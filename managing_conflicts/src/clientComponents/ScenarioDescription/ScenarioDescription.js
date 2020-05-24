import React from 'react';

import classes from './ScenarioDescription.module.css';

const ScenarioDescription = (props) => {
  return (
    <div className={classes.Description}>
    <header className={classes.DescriptionHeader}>
        <h1> {props.title} </h1>
    </header>
    <div className={classes.Text}>
      <text>
            {props.description}
      </text>
    </div>
    </div>
  );
}

export default ScenarioDescription;