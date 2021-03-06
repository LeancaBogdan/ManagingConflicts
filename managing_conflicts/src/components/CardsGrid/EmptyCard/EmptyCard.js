import React, { Component } from 'react'

import classes from './EmptyCard.module.css'
import Add from '@material-ui/icons/Add'


class EmptyCard extends Component {  
  render() {
    return (
      <div className={classes.EmptyCard} onClick={this.props.clicked}>
        <div className={classes.EmptyCardBody}>
          <Add className={classes.AddIcon}/>
        </div>
      </div>
    )
  }
  }

export default EmptyCard