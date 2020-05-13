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

  searchHandler = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <Auxiliary>
        <TopBar 
          showBrochures={this.state.showBrochures}
          toggleClicked={this.toggleHandler}
          search={this.searchHandler}/>
      </Auxiliary>
    );
  }
}

export default MainBody;