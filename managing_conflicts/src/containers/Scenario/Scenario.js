import React, { Component, createContext } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Add from '../../components/UI/Add/Add';
import QuestionModal from '../../components/QuestionsList/QuestionModal/QuestionModal';
import QuestionsList from '../../components/QuestionsList/QuestionsList';

const questions = [
  {
    question: "Ce sex crezi ca are pesonajul implicat? Ce sex crezi ca are pesonajul implicat? Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    options: null
  },
  {
    question: "Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    options: null
  },
  {
    question: "Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    options: null
  }
]

class Scenario extends Component {
  state = {
    name: '',
    description: '',
    questions: questions,
    currentQuestion: {
      question: '',
      type: '',
      options: null,
    },
    actionType: 'create',
    showModal: false,
    newQuestion: {
      question: '',
      type: '',
      options: null,
    }
  }

  addScenarioClicked = () => {
    this.setState({showModal: true, actionType: 'create'})
  }

  addScenarioCancelHandler = () => {
    const newQuestion = {
      question: '',
      type: '',
      options: null,
    }
    this.setState({showModal: false, newQuestion: newQuestion})
  }

  addScenarioHandler = () => {
    const question = {...this.state.newQuestion}
    const questions = [...this.state.questions]
    questions.push(question)
    const newQuestion = {
      question: '',
      type: '',
      options: null,
    }
    this.setState({questions: questions, newQuestion: newQuestion, showModal: false})
  }

  questionChangedHandler = (event) => {
    const newQuestion = event.target.value
    const updatedQuestion = {...this.state.newQuestion}
    updatedQuestion.question = newQuestion
    this.setState({newQuestion: updatedQuestion})
  }

  typeChangedHandler = (event) => {
    const newType = event.target.value
    const updatedQuestion = {...this.state.newQuestion}
    updatedQuestion.type = newType
    if ( newType === "binary" || newType === "likert") {
      updatedQuestion.options = { 
        1: "",
        2: "",
      }
    }
    this.setState({newQuestion: updatedQuestion})
  }

  editQuestionHandler = (index) => {
    const questions = this.state.questions
    const currentQuestion = questions[index]
    this.setState({currentQuestion: currentQuestion, showModal: true, actionType: 'edit'})
  }

  removeQuestionHandler = (index) => {
    const updatedQuestions = [...this.state.questions]
    updatedQuestions.splice(index, 1)
    this.setState({questions: updatedQuestions})
  }

  addOptionHandler = (key) => {
    key = parseInt(key)
    const updatedQuestion = {...this.state.newQuestion}
    updatedQuestion.options[key+1] = ""
    this.setState({newQuestion: updatedQuestion})
  }

  removeOptionHandler = (key) => {
    let updatedQuestion = {...this.state.newQuestion}
    delete updatedQuestion.options[key]
    this.setState({newQuestion: updatedQuestion})
  }

  editOptionHandler = (key, event) => {
    const updatedQuestion = {...this.state.newQuestion}
    updatedQuestion.options[key] = event.target.value
    this.setState({newQuestion: updatedQuestion})
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
              options={this.state.newQuestion.options}
              questionChanged={this.questionChangedHandler}
              typeChanged={this.typeChangedHandler}
              canceled={this.addScenarioCancelHandler}
              saved={this.addScenarioHandler}
              plusClicked={this.addOptionHandler}
              minusClicked={this.removeOptionHandler}
              optionEdited={this.editOptionHandler}
              currentQuestion={this.state.currentQuestion}
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