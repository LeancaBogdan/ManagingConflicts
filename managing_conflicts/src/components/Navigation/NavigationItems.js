import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ProfileImage from './NavigationItem/ProfileImage/ProfileImage';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/main" active={true}>
        Pagina principală
      </NavigationItem>
      <NavigationItem link="/brochure">
        Creează broșură
      </NavigationItem>
      <NavigationItem link="/scenario">
        Creează scenariu
      </NavigationItem>
      <ProfileImage />
    </ul>
  );
}

export default navigationItems;
