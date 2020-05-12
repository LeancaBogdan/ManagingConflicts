import React from 'react';

import classes from './Layout.module.css';
import Aux from '../Aux/Aux';

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar / Navbar</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;