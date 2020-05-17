import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Add from '../../components/UI/Add/Add';

class Scenario extends Component {
  state = {
    question: null,
    currentQuestion: null,
    actionType: 'create',
    showModal: false
  }

  addScenarioClicked = () => {
    this.setState({showModal: true})
  }

  addScenarioCancelHandler = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <Auxiliary>
        <Modal
          show={this.state.showModal}
          modalClosed={this.addScenarioCancelHandler}
          action={this.state.actionType}></Modal>
        <Add clicked={this.addScenarioClicked}>Add new question</Add>
      </Auxiliary>
    );
  }
}

export default Scenario;