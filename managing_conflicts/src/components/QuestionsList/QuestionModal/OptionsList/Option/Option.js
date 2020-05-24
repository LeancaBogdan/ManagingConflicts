import React from 'react';

import classes from './Option.module.css';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove'

const option = (props) => {
  let plus = null
  let minus = null

  if (props.plus) {
    plus = <Add className={classes.Add} onClick={() => props.plusClicked(props.index)}/>
  }

  if (props.minus) {
    minus = <Remove className={classes.Remove} onClick={() => props.minusClicked(props.index)}/>
  }

  return (
    <div className={classes.Option}>
      <p>{props.index}</p>
      <input value={props.optionValue} onChange={(e) => props.edited(props.index, e)}/>
      {plus}
      {minus}
    </div>
  );
}

export default option;