import React from 'react';
import {Router, Route} from "react-router-dom";
import {Routes} from "./Routes";

function App(props) {
    return (
        <Router history={props.history}>
            <Route component={Routes} />
        </Router>
    );
}

export default App;
