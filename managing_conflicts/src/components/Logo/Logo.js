import React from 'react';

import logoImage from '../../assets/managing-conflicts-logo.png';
import classes from './Logo.module.css'

//change the logo image with a new one

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={logoImage} alt="Managing Conflicts"/>
    </div>
  )
}

export default logo;