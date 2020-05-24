import React, {PureComponent} from "react";
import {Redirect, Route, Switch} from "react-router";
import MainBody from "./containers/MainBody/MainBody";
import {PageNotFound} from "./components/PageNotFound";
import ClientLayout from "./hoc/ClientLayout/ClientLayout";

export const MAIN_ROUTES = {
    mainPage: "/main",
    questionnaire: "/questionnaire/:guid",
    scenario: "/brochures/scenarios/:scenarioId",   // TODO: Implement this after firebase integration
    createBrochure: "/brochure",
    createScenario: "/scenario",
    settings: "/settings",
};

export class Routes extends PureComponent {
    render() {
        return (
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={MAIN_ROUTES.mainPage}/>}/>
                <Route path={MAIN_ROUTES.mainPage} exact render={(props) => {
                    return <MainBody {...props} />
                }}/>
                <Route path={MAIN_ROUTES.questionnaire} exact render={(props) => {
                    return <ClientLayout {...props} guid={props.match.params.guid}/>
                }}/>
                <Route component={PageNotFound}/>
            </Switch>
        );
    }
}
