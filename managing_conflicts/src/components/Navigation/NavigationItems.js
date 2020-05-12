import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active={true}>
        Pagina principală
      </NavigationItem>
      <NavigationItem link="/">
        Creează broșură
      </NavigationItem>
      <NavigationItem link="/">
        Creează scenariu
      </NavigationItem>
      <NavigationItem link="/">
        Setările contului
      </NavigationItem>
    </ul>
  );
}

export default navigationItems;