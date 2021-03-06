import React from 'react';

import classes from './CardHeader.module.css'
import { Delete, Edit, MoreHoriz } from '@material-ui/icons';

const cardHeader = (props) => {

  const rightCorner = props.type === "brochure" ? <MoreHoriz className={classes.RightElement}/> : <Edit className={classes.RightElement}/>

  return (
    <div className={classes.CardHeader}>
      <Delete className={classes.LeftElement}/>
      <p><strong>{props.title}</strong></p>
      {rightCorner}
    </div>
  );
}

export default cardHeader;