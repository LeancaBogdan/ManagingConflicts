import React from 'react';

import classes from './TopBar.module.css';
import ToggleBar from './ToggleBar/ToggleBar';
import Search from '../TopBar/Search/Search';

const topBar = (props) => {
  return (
    <div className={classes.TopBar}>
      <ToggleBar className={classes.Toggle}
        showBrochures={props.showBrochures}
        toggleClicked={props.toggleClicked}/>
      <Search search={props.search}/>
    </div>
  );
}

export default topBar;