import React, { Component } from 'react'

import classes from './EmailSender.module.css'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Button from '../../components/UI/Button/Button'
import axios from 'axios'
import firebase_axios from '../../axios-instance'

class EmailSender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brochureId: props.id,
      emailAddresses: "",
      subject: "",
      message: "",
    }
  }

  cancel = () => {
    this.props.history.goBack()
  }

  sendEmail = () => {
    const emailAddresses = this.state.emailAddresses
    const subject = this.state.subject
    const message = this.state.message

    emailAddresses.split(',').map(email => {
      const data = {
        email: email.trim(),
        subject: subject,
      }
      const link_data = {
        brochureId: this.state.brochureId,
        completed: false
      }

      firebase_axios.post('/links.json', link_data)
        .then( resp => {
          const linkId = resp.data.name
          data.message = "<p>" + this.state.message.replace(/\n/g,"<br>") + "</p>"
          data.message = data.message + "<br>" + "<p>Apăsați <a href='http://localhost:3000/questionnaire/" + linkId +"' style='color: blue;'>aici</a> pentru a fi redirectionat către broșură</p>"
          axios.post('/api/sendMail', data)
        })
    })

    this.props.history.goBack()
  }

  handleAddressesChanged = (event) => {
    const addresses = event.target.value
    this.setState({emailAddresses: addresses})
  }

  handleSubjectChanged = (event) => {
    const subject = event.target.value
    this.setState({subject: subject})
  }

  handleMessageSend = (event) => {
    const message = event.target.value
    this.setState({message: message})
  }

  render() {
    return(
      <Auxiliary>
        <div className={classes.ButtonsContainer}>
          <div className={classes.Buttons}>
            <Button btnType="Danger" clicked={this.cancel}>
              Anulare
            </Button>
            <Button btnType="Success" clicked={this.sendEmail}>
              Trimite
            </Button>
          </div>
        </div>
        <div className={classes.Instructions}>
          <ul>
            <li>Introduceți, separate prin virgulă, toate adresele de email către care doriți sa trimiteți această broșură.</li>
            <li>În câmpul de mesaj puteți scrie introduce un text care va fi trimis tuturor participantilor. La acest text link-ul catre broșură va fi atasat automat.</li>
          </ul>
        </div>
        <div className={classes.Address}>
          <label>Trimite catre:</label>
          <textarea 
            value={this.state.name} onChange={this.handleAddressesChanged}/>
        </div>
        <div className={classes.Subject}>
          <label>Subiect:</label>
          <input 
            value={this.state.name} onChange={this.handleSubjectChanged}/>
        </div>
        <div className={classes.Message}>
          <label>Mesaj</label>
          <textarea 
            value={this.state.description} onChange={this.handleMessageSend}/>
        </div>
      </Auxiliary>
    )
  }
}

export default EmailSender