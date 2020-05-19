import React from 'react';

import Layout from './hoc/Layout/Layout';

import ClientLayout from './hoc/ClientLayout/ClientLayout'
import MainBody from './containers/MainBody/MainBody';

function App() {
  return (
    //<ClientLayout/>
    <Layout>
      <MainBody />
    </Layout>
  );
}

export default App;
