import React, { Component } from 'react';

import classes from './Brochure.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Modal from '../../components/UI/Modal/Modal'

const sceanrios_dummy = [
  {
    id: 1,
    name: "Scenario A",
    description: "This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1 
  },
  {
    id: 2,
    name: "Scenario B",
    description: "This is scenario B. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1
  },
  {
    id: 3,
    name: "Scenario C",
    description: "This is scenario C. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1
  },
]

class Brochure extends Component {
  state = {
    brochure_id: "asccadsbnc",
    name: "",
    scenarios: sceanrios_dummy,
    showModal: false
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


  render() {
    return (
      <Auxiliary>
        <Modal 
          show={this.state.showModal}
          modalClosed={this.closeModalHandler}>
            
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