import React from 'react';

import classes from './TopBar.module.css';
import ToggleBar from './ToggleBar/ToggleBar';

const topBar = (props) => {
  return (
    <div className={classes.TopBar}>
      <ToggleBar 
        showBrochures={props.showBrochures}
        toggleClicked={props.toggleClicked}/>
    </div>
  );
}

export default topBar;