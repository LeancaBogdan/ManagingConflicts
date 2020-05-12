import React from 'react';

import classes from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <Auxiliary>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  );
}

export default layout;