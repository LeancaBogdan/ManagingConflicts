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
            showModal: false,
            selectedScenarioId: "",
            mode: props.id !== undefined ? "edit" : "create"
        }
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
                })
                .catch( error => {
                    alert("Sorry! There was a network error.")
                })
        }
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
        this.setState({selectedScenarioId: ""})
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
                //TODO: redirect to back page
            })
            .catch( error => {
                alert("Sorry! There was a network error.")
            })
    }

    cancelSaveBrochure = () => {
        axios.delete('/brochures/' + this.state.id + '.json')
    }

    cancelEditBrochure = () => {

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
                        selectedId={this.state.selectedScenarioId}/>
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
                />
            </Auxiliary>
        );
    }
}

export default Brochure;
