import React from 'react';

import Layout from './hoc/Layout/Layout';

import ClientLayout from './hoc/ClientLayout/ClientLayout'
import MainBody from './containers/MainBody/MainBody';
import Scenario from './containers/Scenario/Scenario';
import Brochure from './containers/Brochure/Brochure';

function App() {
  return (
    //<ClientLayout/>
    <Layout>
      {/* <MainBody /> */}
      {/* <Scenario /> */}
      <Brochure />
    </Layout>
  );
}

export default App;
