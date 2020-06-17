import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import TopBar from '../../components/TopBar/TopBar';
import CardsGrid from '../../components/CardsGrid/CardsGrid';

const scenarios_dummy = [
  {
    id: 1,
    name: "Scenariul A",
    description: "Acesta este scenariul A. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i. Acesta este scenariul A. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i. Acesta este scenariul A. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i. Acesta este scenariul A. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i. Acesta este scenariul A. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i .Acesta este scenariul A. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 1 
  },
  {
    id: 2,
    name: "Scenariul B",
    description: "Acesta este scenariul B. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 1
  },
  {
    id: 3,
    name: "Scenariul C",
    description: "Acesta este scenariul C. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 1
  },
  {
    id: 4,
    name: "Scenariul D",
    description: "Acesta este scenariul D. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 2 
  },
  {
    id: 5,
    name: "Scenariul E",
    description: "Acesta este scenariul E. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 2 
  },
  {
    id: 6,
    name: "Scenariul F",
    description: "Acesta este scenariul F. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 2 
  },
  {
    id: 7,
    name: "Scenariul G",
    description: "Acesta este scenariul G. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 2
  },
  {
    id: 8,
    name: "Scenariul H",
    description: "Acesta este scenariul H. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 2 
  },
  {
    id: 9,
    name: "Scenariul I",
    description: "Acesta este scenariul I. Tot ce trebuie sa face?i este sa completati acest scenariu si sa il submite?i.",
    brochure_id: 2 
  }
]

const brochures_dummy = [
  {
    id: 1,
    name: "Bro?ura #1",
  },
  {
    id: 2,
    name: "Bro?ura #2",
  }
]

class MainBody extends Component {
    state = {
        brochures: [...brochures_dummy],
        scenarios: [...scenarios_dummy],
        filteredBrochures: [...brochures_dummy],
        filteredScenarios: [...scenarios_dummy],
        showBrochures: true,
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

    emptyCardClickedHandler = () => {
        console.log("clicked")
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
                    emptyClicked={this.emptyCardClickedHandler}
                    history={this.props.history}/>
            </Auxiliary>
        );
    }
}

export default MainBody;
