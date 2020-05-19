import React from 'react';

import classes from './ClientHeader.module.css';
import Logo from '../Logo/Logo';

const ClientHeader = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <text className={classes.BrochureName}>
        {props.title}
      </text>
    </header>
  );
}

export default ClientHeader;