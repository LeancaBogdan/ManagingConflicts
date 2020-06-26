import React, {Component} from 'react';

import classes from './Brochure.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Modal from '../../components/UI/Modal/Modal'
import BrochureModal from './BrochureModal/BrochureModal'
import Button from '../../components/UI/Button/Button'
import axios from '../../axios-instance'

class Brochure extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id !== undefined ? props.id : null,
            name: '',
            scenarios: [],
            modalScenarios: [],
            showModal: false,
            selectedScenarioId: "",
            mode: props.id !== undefined ? "edit" : "create"
        }

        this.goBack = this.goBack.bind(this) 
    }

    componentDidMount() {
        if ( this.state.id === null ) {
            const brochure = {
                name: "",
                complete: false
            }
            axios.post('/brochures.json', brochure)
                .then( res => {
                    this.setState({id: res.data.name})
                    this.loadModalScenarios()
                })
                .catch( error => {
                    alert("Sorry! There was a network error.")
                })
        } else {
            axios.get('/brochures/' + this.state.id + '.json')
              .then (response => {
                this.setState({name: response.data["name"]})
              })
              .catch ( error => {
                alert("Sorry! There was a network error.")
              })
            const scenariosIds = []
            const scenarios = []
            axios.get('/brochure-scenario.json')
                .then( resp => {
                  for(let key in resp.data) {
                      if (resp.data[key].brochureId === this.state.id) {
                        scenariosIds.push(resp.data[key].scenarioId)
                      }
                  }

                scenariosIds.map(scenarioId => {
                    axios.get('scenarios/' + scenarioId + '.json')
                        .then(resp => {
                            scenarios.push({
                                ...resp.data,
                                id: scenarioId
                            })
                            this.setState({scenarios: scenarios})
                            this.loadModalScenarios()
                        })
                })
                
              })  
        }
    }

    loadModalScenarios() {
        axios.get('/scenarios.json')
            .then (resp => {
                const modalScenarios = []
                const scenarios = [...this.state.scenarios]
                for (let key in resp.data){
                    const index = scenarios.findIndex( scenario => scenario.id === key)
                    if (index === -1) {
                        modalScenarios.push({
                            id: key,
                            name: resp.data[key].name
                        })
                    }
                }

                this.setState({modalScenarios: modalScenarios})
            })
    }

    brochureNameChangedHander = (event) => {
        const newName = event.target.value
        this.setState({name: newName})
    }

    emptyScenarioClickedHandler = () => {
        this.setState({showModal: true})
    }

    closeModalHandler = () => {
        this.setState({showModal: false})
    }

    saveClickedHandler = () => {
        const brochureSceanario = {
            brochureId: this.state.id,
            scenarioId: this.state.selectedScenarioId,
        }
        axios.post('/brochure-scenario.json', brochureSceanario)
            .then( resp => {
                this.reloadScenarios(resp.data.name)
            })
        this.setState({selectedScenarioId: "", showModal: false})
    }

    reloadScenarios(id) {
        let scenarioId = null
        const scenarios = [...this.state.scenarios]
        axios.get('/brochure-scenario.json')
            .then( resp => {
                for(let key in resp.data) {
                    if (key === id) {
                        scenarioId = resp.data[key].scenarioId
                    }
                }
                
                axios.get('scenarios/' + scenarioId + '.json')
                    .then(resp => {
                        scenarios.push({
                            ...resp.data,
                            id: scenarioId
                        })
                        this.setState({scenarios: scenarios})
                        this.loadModalScenarios()
                    })
            
            })
    }

    selectedHandler = (event) => {
        const id = event.target.value
        this.setState({selectedScenarioId: id})
    }

    saveBrochure = () => {
        const brochure = {
            name: this.state.name,
            complete: true
        }
        axios.put('/brochures/' + this.state.id + '.json', brochure)
            .then( resp => {
                this.goBack()            })
            .catch( error => {
                alert("Sorry! There was a network error.")
            })
    }

    cancelSaveBrochure = () => {
        axios.delete('/brochures/' + this.state.id + '.json')
            .then(resp => {
                this.goBack()
            })
    }

    cancelEditBrochure = () => {
       this.goBack() 
    }

    goBack() {
        this.props.history.goBack()
    }

    newScenario = () => {
        this.props.history.push("/scenario")
    }

    deleteScenario = (id) => {
        axios.get('/brochure-scenario.json')
          .then(resp => {
            let bsId = null
            for(let key in resp.data) {
              if (resp.data[key].scenarioId === id) {
                bsId = key
              }
            }

            
            axios.delete('/brochure-scenario/' + bsId + '.json')
            .then(resp => {
                const scenarios = [...this.state.scenarios]
                const index = scenarios.findIndex(s => s.id === id)
                scenarios.splice(index, 1)
                this.setState({scenarios: scenarios})
            })
          })
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
                        selectedId={this.state.selectedScenarioId}
                        createScenario={this.newScenario}
                        scenarios={this.state.modalScenarios}/>
                </Modal>
                <div className={classes.ButtonsContainer}>
                    <div className={classes.Buttons}>
                        <Button btnType="Danger" clicked={this.state.mode === 'create' ? this.cancelSaveBrochure : this.cancelEditBrochure}>
                            Anulare
                        </Button>
                        <Button btnType="Success" clicked={this.saveBrochure}>
                        {this.state.mode === 'create' ? "Salvează" : "Editează"}
                        </Button>
                    </div>
                </div>
                <div className={classes.BrochureName}>
                    <label>Numele broșurii:</label>
                    <input
                        value={this.state.name} onChange={this.brochureNameChangedHander}/>
                </div>
                <CardsGrid
                    showBrochures={this.state.showBrochures}
                    scenarios={this.state.scenarios}
                    showModal={this.emptyScenarioClickedHandler}
                    history={this.props.history}
                    deleted={this.deleteScenario}
                />
            </Auxiliary>
        );
    }
}

export default Brochure;
