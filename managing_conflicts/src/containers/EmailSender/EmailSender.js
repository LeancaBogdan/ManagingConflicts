import React, { Component } from 'react'

import classes from './EmailSender.module.css'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

class EmailSender extends Component {
  render() {
    return(
      <Auxiliary>
        <h3>Hello to email sender</h3>
      </Auxiliary>
    )
  }
}

export default EmailSender