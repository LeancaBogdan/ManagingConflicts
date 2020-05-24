import React from 'react';

import classes from './Question.module.css';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete'

const question = (props) => {
  return (
    <div className={classes.Question}>
      <p>{props.index}. {props.question}</p>
      <div className={classes.Icons}>
        <Edit onClick={props.edit}/>
        <Delete onClick={props.remove} className={classes.Delete}/>
      </div>
    </div>
  );
}

export default question;