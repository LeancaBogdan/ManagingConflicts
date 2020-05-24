import React from 'react';
import {Router, Route} from "react-router-dom";
import {Routes} from "./Routes";
import Layout from "./hoc/Layout/Layout";

function App(props) {
    return (
        <Layout>
            <Router history={props.history}>
                <Route component={Routes} />
            </Router>
        </Layout>
    );
}

export default App;
