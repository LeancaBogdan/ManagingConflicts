import React from 'react';
import { Add } from '@material-ui/icons';
import classes from './Add.module.css';

const add = (props) => {
  return (
    <div className={classes.Add} onClick={props.clicked}>
      <Add />
      <p>{props.children}</p>
    </div>
  );
}

export default add;