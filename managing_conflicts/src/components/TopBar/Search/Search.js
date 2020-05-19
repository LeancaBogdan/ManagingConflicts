import React from 'react';

import classes from './Search.module.css';

const search = (props) => {
  return (
    <input 
      className={classes.Search} 
      type="text" 
      placeholder="Search..."
      onChange={props.search} />
  );
} 

export default search;