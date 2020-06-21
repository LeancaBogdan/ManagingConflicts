import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import TopBar from '../../components/TopBar/TopBar';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import axios from '../../axios-instance'

class MainBody extends Component {
    state = {
        brochures: [],
        scenarios: [],
        filteredBrochures: [],
        filteredScenarios: [],
        showBrochures: true,
    }

    componentDidMount = () => {
      axios.get('/brochures.json')
        .then( response => {
          const brochures = []
          for (let key in response.data) {
            if (response.data[key].complete === true){
              brochures.push( {
                ...response.data[key],
                id: key
              })
            }
            this.setState({brochures: brochures, filteredBrochures: brochures})
          }
        })
        .catch( error => {
          alert("Sorry! There was a network error. We couldn't fetch the data.")
        })

      axios.get('/scenarios.json')
        .then( response => {
          const scenarios = []
          for (let key in response.data) {
            if (response.data[key].complete === true){
              scenarios.push( {
                ...response.data[key],
                id: key
              })
            }
            this.setState({scenarios: scenarios, filteredScenarios: scenarios})
          }
        })
        .catch( error => {
          alert("Sorry! There was a network error. We couldn't fetch the data.")
        })
    }

    toggleHandler = () => {
        this.setState((prevState) => {
            return {showBrochures: !prevState.showBrochures}
        });
    }

    searchHandler = (event) => {
        const input = event.target.value
        if (this.state.showBrochures) {
            const allBrochures = [...this.state.brochures]
            const filteredBrochures = allBrochures.filter(brochure => {
                return brochure.name.toLowerCase().includes(input.toLowerCase())
            })

            this.setState({filteredBrochures: filteredBrochures})
        } else {
            const allScenarios = [...this.state.scenarios]
            const filteredScenarios = allScenarios.filter(scenario => {
                return scenario.name.toLowerCase().includes(input.toLowerCase())
            })

            this.setState({filteredScenarios: filteredScenarios})
        }
    }

    render() {
        return (
            <Auxiliary>
                <TopBar
                    showBrochures={this.state.showBrochures}
                    toggleClicked={this.toggleHandler}
                    search={this.searchHandler}/>
                <CardsGrid
                    showBrochures={this.state.showBrochures}
                    brochures={this.state.filteredBrochures}
                    scenarios={this.state.filteredScenarios}
                    history={this.props.history}/>
            </Auxiliary>
        );
    }
}

export default MainBody;
