import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationiItems from '../Navigation/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationiItems />
      </nav>
    </header>
  );
}

export default toolbar;