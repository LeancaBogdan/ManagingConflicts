import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import TopBar from '../../components/TopBar/TopBar';
import CardsGrid from '../../components/CardsGrid/CardsGrid';

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
