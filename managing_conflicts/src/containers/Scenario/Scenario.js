import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Add from '../../components/UI/Add/Add';
import QuestionModal from '../../components/QuestionsList/QuestionModal/QuestionModal';
import QuestionsList from '../../components/QuestionsList/QuestionsList';

const questions = [
  {
    question: "Ce sex crezi ca are pesonajul implicat? Ce sex crezi ca are pesonajul implicat? Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    answers: []
  },
  {
    question: "Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    answers: []
  },
  {
    question: "Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    answers: []
  }
]

class Scenario extends Component {
  state = {
    name: '',
    description: '',
    questions: questions,
    currentQuestion: null,
    actionType: 'create',
    showModal: false,
    newQuestion: {
      question: '',
      type: '',
      answers: null
    }
  }

  addScenarioClicked = () => {
    this.setState({showModal: true, actionType: 'create'})
  }

  addScenarioCancelHandler = () => {
    this.setState({showModal: false})
  }

  addScenarioHandler = () => {
    alert("O noua intrebare va fi adaugata")
  }

  questionChangedHandler = (event) => {
    const newQuestion = event.target.value
    const updatedQuestion = {...this.state.newQuestion}
    updatedQuestion.question = newQuestion
    this.setState({newQuestion: updatedQuestion})
    console.log(newQuestion)
    console.log(this.state)
  }

  typeChangedHandler = (event) => {
    const newType = event.target.value
    const updatedQuestion = {...this.state.newQuestion}
    updatedQuestion.type = newType
    this.setState({newQuestion: updatedQuestion})
    console.log(updatedQuestion)
    console.log(this.state.newQuestion)
  }

  editQuestionHandler = (index) => {
    this.setState({showModal: true, actionType: 'edit'})
  }

  removeQuestionHandler = (index) => {

  }

  render() {
    return (
      <Auxiliary>
        <Modal
          show={this.state.showModal}
          modalClosed={this.addScenarioCancelHandler}>
            <QuestionModal 
              action={this.state.actionType}
              questionType={this.state.newQuestion.type}
              questionChanged={this.questionChangedHandler}
              typeChanged={this.typeChangedHandler}
              canceled={this.addScenarioCancelHandler}
              saved={this.addScenarioHandler}
              />
          </Modal>
        <Add clicked={this.addScenarioClicked}>Creează o întrebare nouă</Add>
        <QuestionsList 
          questions={this.state.questions} 
          editQuestion={this.editQuestionHandler}
          removeQuestion={this.removeQuestionHandler}/>
      </Auxiliary>
    );
  }
}

export default Scenario;