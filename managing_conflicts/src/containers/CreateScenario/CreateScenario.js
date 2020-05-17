import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import Scenario from '../../components/Scenario/Scenario';

class CreateScenario extends Component {
  state = {
    
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar />
        <Scenario />
      </Auxiliary>
    );
  }
}

export default CreateScenario;