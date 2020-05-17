import React from 'react';

import Layout from './hoc/Layout/Layout';
import MainBody from './containers/MainBody/MainBody';
import CreateScenario from './containers/CreateScenario/CreateScenario';

function App() {
  return (
    <Layout>
      {/* <MainBody /> */}
      <CreateScenario />
    </Layout>
  );
}

export default App;
