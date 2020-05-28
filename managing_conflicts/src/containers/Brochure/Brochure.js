import React, { Component } from 'react';

import classes from './Brochure.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Modal from '../../components/UI/Modal/Modal'
import BrochureModal from './BrochureModal/BrochureModal'

const sceanrios_dummy = [
  {
    id: 1,
    name: "Scenariul A",
    description: "Acesta este scenariul A. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți. Acesta este scenariul A. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți. Acesta este scenariul A. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți. Acesta este scenariul A. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți. Acesta este scenariul A. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți.",
    brochure_id: 1 
  },
  {
    id: 2,
    name: "Scenariul B",
    description: "Acesta este scenariul B. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți",
    brochure_id: 1
  },
  {
    id: 3,
    name: "Scenariul C",
    description: "Acesta este scenariul C. Tot ce trebuie să faceți este să completati acest scenariu si să il submiteți",
    brochure_id: 1
  },
]

class Brochure extends Component {
  state = {
    brochure_id: "asccadsbnc",
    name: "",
    scenarios: sceanrios_dummy,
    showModal: false,
    selectedBrochureId: "",
  }

  brochureNameChangedHander = (event) => {
    const newName = event.target.value
    this.setState({name: newName})
  }

  emptyScenarioSClickedHandler = () => {
    this.setState({showModal: true})
  }

  closeModalHandler = () => {
    this.setState({showModal: false})
  }

  saveClickedHandler = () => {
    alert("Pam pam pam")
  }

  selectedHandler = (event) => {
    const id = event.target.value
    console.log(id)
    this.setState({selectedBrochureId: id})
  }

  render() {
    return (
      <Auxiliary>
        <Modal 
          show={this.state.showModal}
          modalClosed={this.closeModalHandler}>
            <BrochureModal 
              saved={this.saveClickedHandler}
              canceled={this.closeModalHandler}
              selected={this.selectedHandler}
              selectedId={this.state.selectedBrochureId}/>
        </Modal>
        <div className={classes.BrochureName}>
          <label>Numele broșurii:</label>
          <input 
            value={this.state.name} onChange={this.brochureNameChangedHander}/>
        </div>
        <CardsGrid 
          showBrochures={this.state.showBrochures}
          scenarios={this.state.scenarios}
          emptyClicked={this.emptyScenarioSClickedHandler}/>
      </Auxiliary>
    );
  }
}

export default Brochure;