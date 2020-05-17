import React from 'react';

import Layout from './hoc/Layout/Layout';
import MainBody from './containers/MainBody/MainBody';
import Scenario from './containers/Scenario/Scenario';

function App() {
  return (
    <Layout>
      {/* <MainBody /> */}
      <Scenario />
    </Layout>
  );
}

export default App;
