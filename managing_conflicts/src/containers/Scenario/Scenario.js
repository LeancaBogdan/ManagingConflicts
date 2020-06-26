import React, { Component } from 'react';

import classes from './Scenario.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Add from '../../components/UI/Add/Add';
import QuestionModal from '../../components/QuestionsList/QuestionModal/QuestionModal';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import Button from '../../components/UI/Button/Button'
import axios from '../../axios-instance'

class Scenario extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: props.id !== undefined ? props.id : null,
      name: '',
      description: '',
      questions: [],
      currentQuestion: {
        question: '',
        type: 'free-answer',
        options: null,
      },
      mode: props.id !== undefined ? 'edit' : 'create',
      actionType: 'create',
      showModal: false,
    }
  }

  componentDidMount() {
    const scenarioId = this.state.id
    if ( scenarioId === null ) {
      const scenario = {
        name: "",
        description: "",
        complete: false
      }
      axios.post('/scenarios.json', scenario)
        .then( res => {
          this.setState({id: res.data.name})
        })
        .catch( error => {
          alert("Sorry! There was a network error.")
        })
    } else {
      axios.get('/scenarios/' + this.state.id + '.json')
        .then (response => {
          this.setState({name: response.data["name"], description: response.data["description"]})
        })
        .catch ( error => {
          alert("Sorry! There was a network error.")
        })

      // const queryParams = '?orderBy="scenario_id"&equalTo="' + scenarioId + '"'
      axios.get('/questions.json')
        .then( response => {
          const questions = []
          for (let key in response.data) {
            if (response.data[key].scenario_id === scenarioId ) {
              questions.push( {
                ...response.data[key],
                id: key
              })
            }
            this.setState({questions: questions})
          }
        })
        .catch( error => {
          alert("Sorry! There was a network error.")
        })
    }
  }

  addQuestionClicked = () => {
    this.setState({showModal: true, actionType: 'create'})
  }

  addQuestionCancelHandler = () => {
    const newQuestion = {
      question: '',
      type: 'free-answer',
      options: null,
    }
    this.setState({showModal: false, currentQuestion: newQuestion})
  }

  addQuestionHandler = () => {
    const newQuestion = {
      ...this.state.currentQuestion,
      scenario_id: this.state.id
    }
    axios.post('/questions.json', newQuestion)
      .then( res => {
        const question = {...this.state.currentQuestion, id: res.data.name}
        const questions = [...this.state.questions]
        questions.push(question)
        const newQuestion = {
          question: '',
          type: 'free-answer',
          options: null,
        }
        this.setState({questions: questions, currentQuestion: newQuestion, showModal: false})
      })
      .catch( error => {
        alert("Sorry! There was a network error.")
      })
  }

  editQuestion = (questionId) => {
    const updatedQuestion = {
      question: this.state.currentQuestion.question,
      type: this.state.currentQuestion.type,
      options: this.state.currentQuestion.options,
      scenario_id: this.state.id
    }
    axios.put('/questions/' + questionId + '.json', updatedQuestion)
      .then( res => {
        const questions = [...this.state.questions]
        const index = questions.findIndex(q => q.id === questionId)
        questions[index] = updatedQuestion
        const newQuestion = {
          question: '',
          type: 'free-answer',
          options: null,
        }
        this.setState({questions: questions, currentQuestion: newQuestion, showModal: false})
      })
      .catch( error => {
        alert("Sorry! There was a network error.")
      })
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
        0: "",
        1: "",
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
    const questionId = this.state.questions[index].id
    axios.delete('/questions/' + questionId + '.json')
      .then( resp => {
        const updatedQuestions = [...this.state.questions]
        updatedQuestions.splice(index, 1)
        this.setState({questions: updatedQuestions})
      })
      .catch( error => {
        alert("Sorry! There was a network error.")
      })
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

  saveScenario = () => {
    const scenario = {
      name: this.state.name,
      description: this.state.description,
      complete: true
    }
    axios.put('/scenarios/' + this.state.id + '.json', scenario)
      .then( resp => {
        this.props.history.goBack()
      })
      .catch( error => {
        alert("Sorry! There was a network error.")
      })
  }

  cancelSaveScenario = () => {
    const questions = [...this.state.questions]
    questions.map( question => {
      axios.delete('/questions/' + question.id + '.json')
    })
    axios.delete('/scenarios/' + this.state.id + '.json')
      .then( resp => {
        this.props.history.goBack()
      })
  }

  cancelEditScenario = () => {
    this.props.history.goBack()
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
        <div className={classes.ButtonsContainer}>
          <div className={classes.Buttons}>
            <Button btnType="Danger" clicked={this.state.mode === 'create' ? this.cancelSaveScenario : this.cancelEditScenario}>
              Anulare
            </Button>
            <Button btnType="Success" clicked={this.saveScenario}>
              {this.state.mode === 'create' ? "Salvează" : "Editează"}
            </Button>
          </div>
        </div>
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