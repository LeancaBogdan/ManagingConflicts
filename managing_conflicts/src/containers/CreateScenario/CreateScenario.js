import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import Scenario from '../../components/Scenario/Scenario';
import Modal from '../../components/UI/Modal/Modal';
import QuestionModal from '../../components/Scenario/QuestionsContainer/QuestionModal/QuestionModal';

class CreateScenario extends Component {
  state = {
    addingScenario: false
  }

  addScenarioHandler = () => {
    this.setState({addingScenario: true})
  }

  addScenarioCancelHandler = () => {
    this.setState({addingScenario: false})
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar />
        <Modal 
          show={this.state.addingScenario}
          closeModal={this.addScenarioCancelHandler}>
            <QuestionModal />
          </Modal>
        <Scenario 
          addScenarioClicked={this.addScenarioHandler}/>
      </Auxiliary>
    );
  }
}

export default CreateScenario;