import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import TopBar from '../../components/TopBar/TopBar';

class MainBody extends Component {
  state = {
    brochures: [],
    scenarios: [],
    showBrochures: true,
  }

  toggleHandler = () => {
    this.setState((prevState) => { return {showBrochures: !prevState.showBrochures}});
  }

  render() {
    return (
      <Auxiliary>
        <TopBar 
          showBrochures={this.state.showBrochures}
          toggleClicked={this.toggleHandler}/>
      </Auxiliary>
    );
  }
}

export default MainBody;