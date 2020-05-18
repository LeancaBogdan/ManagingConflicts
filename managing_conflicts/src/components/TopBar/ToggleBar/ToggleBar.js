import React from 'react';

import classes from './ToggleBar.module.css';
import ToggleItem from './ToggleItem/ToggleItem';

const toggleBar = (props) => {
  return (
    <div className={classes.ToggleBar}>
      <ToggleItem 
        active={props.showBrochures}
        toggleClicked={props.toggleClicked}
        pos="left">Broșuri</ToggleItem>
      <ToggleItem 
        active={!props.showBrochures}
        toggleClicked={props.toggleClicked}
        pos="right">Șcenarii</ToggleItem>
    </div>
  );
}

export default toggleBar;