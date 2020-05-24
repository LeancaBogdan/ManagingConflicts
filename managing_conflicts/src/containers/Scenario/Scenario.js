import React, { Component } from 'react';

import classes from './Scenario.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Add from '../../components/UI/Add/Add';
import QuestionModal from '../../components/QuestionsList/QuestionModal/QuestionModal';
import QuestionsList from '../../components/QuestionsList/QuestionsList';

const questions = [
  {
    question: "Ce sex crezi ca are pesonajul implicat?",
    type: "binary",
    options: {
      1: "Masculin",
      2: "Feminin"
    }
  },
  {
    question: "Ce parere aveti despre aceasta situatie?",
    type: "free_answer",
    options: null
  },
  {
    question: "Indicaţi măsura în care Ioana a generat dezacorduri în grup privind acţiunile care trebuie realizate pentru îndeplinirea sarcinii",
    type: "likert",
    options: {
      1: "Deloc",
      2: "",
      3: "",
      4: "",
      5: "În mare măsură"
    }
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
  }

  addQuestionClicked = () => {
    this.setState({showModal: true, actionType: 'create'})
  }

  addQuestionCancelHandler = () => {
    const newQuestion = {
      question: '',
      type: '',
      options: null,
    }
    this.setState({showModal: false, currentQuestion: newQuestion})
  }

  addQuestionHandler = () => {
    const question = {...this.state.currentQuestion}
    const questions = [...this.state.questions]
    questions.push(question)
    const newQuestion = {
      question: '',
      type: '',
      options: null,
    }
    this.setState({questions: questions, currentQuestion: newQuestion, showModal: false})
  }

  editQuestion = () => {
    //TO DO
  }

  questionChangedHandler = (event) => {
    const newQuestion = event.target.value
    const updatedQuestion = {...this.state.currentQuestion}
    updatedQuestion.question = newQuestion
    this.setState({currentQuestion: updatedQuestion})
  }

  typeChangedHandler = (event) => {
    const newType = event.target.value
    const updatedQuestion = {...this.state.currentQuestion}
    updatedQuestion.type = newType
    if ( newType === "binary" || newType === "likert") {
      updatedQuestion.options = { 
        1: "",
        2: "",
      }
    }
    this.setState({currentQuestion: updatedQuestion})
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
    const updatedQuestion = {...this.state.currentQuestion}
    updatedQuestion.options[key+1] = ""
    this.setState({currentQuestion: updatedQuestion})
  }

  removeOptionHandler = (key) => {
    let updatedQuestion = {...this.state.currentQuestion}
    delete updatedQuestion.options[key]
    this.setState({currentQuestion: updatedQuestion})
  }

  editOptionHandler = (key, event) => {
    const updatedQuestion = {...this.state.currentQuestion}
    updatedQuestion.options[key] = event.target.value
    this.setState({currentQuestion: updatedQuestion})
  }

  scenarioNameChangedHander = (event) => {
    const newName = event.target.value
    this.setState({name: newName})
  }

  scenarioDescriptionChangedHandler = (event) => {
    const newDescription = event.target.value
    this.setState({description: newDescription})
  }

  render() {
    return (
      <Auxiliary>
        <Modal
          show={this.state.showModal}
          modalClosed={this.addQuestionCancelHandler}>
            <QuestionModal 
              currentQuestion={this.state.currentQuestion}
              action={this.state.actionType}
              questionChanged={this.questionChangedHandler}
              typeChanged={this.typeChangedHandler}
              canceled={this.addQuestionCancelHandler}
              saved={this.addQuestionHandler}
              edited={this.editQuestion}
              plusClicked={this.addOptionHandler}
              minusClicked={this.removeOptionHandler}
              optionEdited={this.editOptionHandler}
              
              />
          </Modal>
        <div className={classes.ScenarioName}>
          <label>Numele scenariului:</label>
          <input 
            value={this.state.name} onChange={this.scenarioNameChangedHander}/>
        </div>
        <div className={classes.ScenarioDescription}>
          <label>Descrierea scenariului:</label>
          <textarea 
            value={this.state.description} onChange={this.scenarioDescriptionChangedHandler}/>
        </div>
        <Add clicked={this.addQuestionClicked}>Creează o întrebare nouă</Add>
        <QuestionsList 
          questions={this.state.questions} 
          editQuestion={this.editQuestionHandler}
          removeQuestion={this.removeQuestionHandler}/>
      </Auxiliary>
    );
  }
}

export default Scenario;