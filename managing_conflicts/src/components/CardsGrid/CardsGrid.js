import React from 'react';

import classes from './CardsGrid.module.css';
import Card from './Card/Card';

const cardsGrid = (props) => {
  return (
    <div className={classes.CardsGrid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default cardsGrid;