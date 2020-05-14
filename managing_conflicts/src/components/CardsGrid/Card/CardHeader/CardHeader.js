import React from 'react';

import classes from './CardHeader.module.css'
import { Delete, Edit, MoreHoriz } from '@material-ui/icons';

const cardHeader = (props) => {

  const rightCorner = props.type === "brochure" ? <Edit /> : <MoreHoriz />

  return (
    <div className={classes.CardHeader}>
      <Delete />
      <p><strong>{props.title}</strong></p>
      {rightCorner}
    </div>
  );
}

export default cardHeader;