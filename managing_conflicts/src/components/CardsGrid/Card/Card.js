import React from 'react';

import classes from './Card.module.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';

const card = (props) => {
  return (
    <div className={classes.Card}>
      <CardHeader 
        type={props.type}
        title={props.name}/>
      <CardBody 
        type={props.type}
        info={props.body}/>
    </div>
  );
}

export default card;