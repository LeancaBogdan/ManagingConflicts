import React from 'react';

import classes from './ToggleItem.module.css';

const toggleItem = (props) => {
  let attachedClasses = [classes.ToggleItem];
  if (props.active) {
    attachedClasses.push(classes.Active);
  }

  if (props.pos === "left"){
    attachedClasses.push(classes.Left);
  } else {
    attachedClasses.push(classes.Right);
  }

  return (
    <button 
      className={attachedClasses.join(' ')}
      onClick={props.toggleClicked}
      disabled={props.active}>{props.children}</button>
  );
}

export default toggleItem;