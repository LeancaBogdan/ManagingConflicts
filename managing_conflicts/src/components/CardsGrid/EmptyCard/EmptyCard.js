import React, { Component } from 'react'

import classes from './EmptyCard.module.css'
import Description from '@material-ui/icons/Description'


class EmptyCard extends Component {  
  render() {
    return (
      <div className={classes.EmptyCard} onClick={this.props.clicked}>
        <div className={classes.EmptyCardBody}>
          <Description />
        </div>
      </div>
    )
  }
  }

export default EmptyCard