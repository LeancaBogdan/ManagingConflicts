import React from 'react';

import classes from './TopBar.module.css';
import ToggleBar from './ToggleBar/ToggleBar';
import Search from '../TopBar/Search/Search';

const topBar = (props) => {
  return (
    <div className={classes.TopBar}>
      <ToggleBar 
        showBrochures={props.showBrochures}
        toggleClicked={props.toggleClicked}/>
      <Search 
        className={classes.Search}
        search={props.search}/>
    </div>
  );
}

export default topBar;