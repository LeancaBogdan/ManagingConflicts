import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import TopBar from '../../components/TopBar/TopBar';
import CardsGrid from '../../components/CardsGrid/CardsGrid';

const scenarios_dummy = [
  {
    id: 1,
    name: "Scenario A",
    description: "This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1 
  },
  {
    id: 2,
    name: "Scenario B",
    description: "This is scenario B. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1
  },
  {
    id: 3,
    name: "Scenario C",
    description: "This is scenario C. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1
  },
  {
    id: 4,
    name: "Scenario D",
    description: "This is scenario D. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 2 
  },
  {
    id: 5,
    name: "Scenario E",
    description: "This is scenario E. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 2 
  },
  {
    id: 6,
    name: "Scenario F",
    description: "This is scenario F. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 2 
  },
  {
    id: 7,
    name: "Scenario G",
    description: "This is scenario G. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 2
  },
  {
    id: 8,
    name: "Scenario H",
    description: "This is scenario H. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 2 
  },
  {
    id: 9,
    name: "Scenario I",
    description: "This is scenario I. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 2 
  }
]

const brochures_dummy = [
  {
    id: 1,
    name: "Brochure #1",
  },
  {
    id: 2,
    name: "Brochure #2",
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
    this.setState((prevState) => { return {showBrochures: !prevState.showBrochures}});
  }

  searchHandler = (event) => {
    const input = event.target.value
    if (this.state.showBrochures) {
      const allBrochures = [...this.state.brochures]
      const filteredBrochures = allBrochures.filter( brochure => {
        return brochure.name.toLowerCase().includes(input.toLowerCase())
      })

      this.setState({filteredBrochures: filteredBrochures})
    } else {
      const allScenarios = [...this.state.scenarios]
      const filteredScenarios = allScenarios.filter( scenario => {
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
          scenarios={this.state.filteredScenarios}/>
      </Auxiliary>
    );
  }
}

export default MainBody;