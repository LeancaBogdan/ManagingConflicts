import React from 'react';

import classes from './ClientBody.module.css';
import ScenarioDescription from './../ScenarioDescription/ScenarioDescription'
import Question from '../Questions/Question'

const ClientBody = (props) => {
  return (
    <div className={classes.Body}>
      <ScenarioDescription title={props.scenario.name} description={props.scenario.description}/>
      {
         props.scenario.questions.map((question, index) => (
           <Question count={index+1} description={question.description} type={question.type} options={question.options}/>
         ))
      }
    </div>
  );
}

export default ClientBody;