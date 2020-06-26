import React from 'react';

import classes from './ClientBody.module.css';
import ScenarioDescription from './../ScenarioDescription/ScenarioDescription'
import Question from '../Questions/Question'

const ClientBody = (props) => {
  return (
    <div className={classes.Body}>
      <ScenarioDescription title={props.scenario.name} description={props.scenario.description}/>
      <div className={classes.Questions}>
      <h3>Pornind de la scenariul prezentat:</h3>
      {
        
         props.scenario.questions.map((question, index) => (
           <Question count={index+1} description={question.description} type={question.type} options={question.options}/>
         ))
      }
      </div>
    </div>
  );
}

export default ClientBody;