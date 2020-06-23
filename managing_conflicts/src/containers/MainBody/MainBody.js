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
        brochureScenarios: [],
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

      axios.get('/brochure-scenario.json')
        .then(response => {
          const brochureScenarios = []
          for (let key in response.data) {
            brochureScenarios.push( {
              ...response.data[key],
              id: key
            })
            this.setState({brochureScenarios: brochureScenarios})
          }
        })
    }

    toggleHandler = () => {
        this.setState((prevState) => {
            return {showBrochures: !prevState.showBrochures}
        });
    }

    deleteCard = (id) => {
      if ( this.state.showBrochures ) {
        axios.delete('/brochures/' + id + '.json')
          .then( resp => {
            const updatedBrochures = [...this.state.brochures]
            let index = updatedBrochures.findIndex( b => b.id === id)
            updatedBrochures.splice(index, 1)
            
            const updatedFilteredBrochures = [...this.state.filteredBrochures]
            index = updatedFilteredBrochures.findIndex( b => b.id === id)
            updatedFilteredBrochures.splice(index, 1)

            this.setState({brochures: updatedBrochures, filteredBrochures: updatedFilteredBrochures})
            this.deleteBrochureScenariosInstances(id, "brochure")
          })
          .catch( error => {
            console.log(error)
            alert("Sorry! There was a network error.")
          })
      } else {
        axios.delete('/scenarios/' + id + '.json')
          .then( resp => {
            const updatedScenarios = [...this.state.scenarios]
            let index = updatedScenarios.findIndex( s => s.id === id)
            updatedScenarios.splice(index, 1)

            const updatedFilteredScenarios = [...this.state.filteredScenarios]
            index = updatedFilteredScenarios.findIndex( s => s.id === id)
            updatedFilteredScenarios.splice(index, 1)

            this.setState({scenarios: updatedScenarios, filteredScenarios: updatedFilteredScenarios})
            this.deleteBrochureScenariosInstances(id, "scenario")
          })
          .catch( error => {
            alert("Sorry! There was a network error.")
          })
      }
    }

    deleteBrochureScenariosInstances(id, type) {
      const ids = []
      if ( type === "brochure") {
        axios.get('/brochure-scenario.json')
          .then(resp => {
            for(let key in resp.data) {
              if (resp.data[key].brochureId === id) {
                ids.push(key)
              }
            }

            ids.map(id => {
              axios.delete('/brochure-scenario/' + id + '.json')
                .then(resp => {
                  const brochureScenarios = [...this.state.brochureScenarios]
                  const index = brochureScenarios.findIndex(bs => bs.id === id)
                  brochureScenarios.splice(index, 1)
                  this.setState({brochureScenarios: brochureScenarios})
                })
            })
          })
      } else {
        axios.get('/brochure-scenario.json')
          .then(resp => {
            for(let key in resp.data) {
              if (resp.data[key].scenarioId === id) {
                ids.push(key)
              }
            }

            ids.map(id => {
              axios.delete('/brochure-scenario/' + id + '.json')
                .then(resp => {
                  const brochureScenarios = [...this.state.brochureScenarios]
                  const index = brochureScenarios.findIndex(bs => bs.id === id)
                  brochureScenarios.splice(index, 1)
                  this.setState({brochureScenarios: brochureScenarios})
                })
            })
          })
      }
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

    sendEmailClicked = (id) => {
      console.log(id)
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
                    brochureScenarios={this.state.brochureScenarios}
                    scenarios={this.state.filteredScenarios}
                    history={this.props.history}
                    deleted={this.deleteCard}
                    sendEmail={this.sendEmailClicked}/>
            </Auxiliary>
        );
    }
}

export default MainBody;
