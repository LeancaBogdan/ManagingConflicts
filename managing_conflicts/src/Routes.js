import React, {PureComponent} from "react";
import {Redirect, Route, Switch} from "react-router";
import MainBody from "./containers/MainBody/MainBody";
import {PageNotFound} from "./components/PageNotFound";
import ClientLayout from "./hoc/ClientLayout/ClientLayout";
import Brochure from "./containers/Brochure/Brochure";
import Scenario from "./containers/Scenario/Scenario";
import SettingsPage from "./components/SettingsPage";
import Layout from "./hoc/Layout/Layout";

export const MAIN_ROUTES = {
    mainPage: "/main",
    questionnaire: "/questionnaire/:guid",
    scenario: "/brochures/scenarios/:scenarioId",   // TODO: Implement this after firebase integration
    createBrochure: "/brochure",
    createScenario: "/scenario",
    settings: "/settings",
    scenario_edit: "/scenarios/:scenarioId",
    brochure_edit: "/brochures/:brochureId"
};

export class Routes extends PureComponent {
    render() {
        return (
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={MAIN_ROUTES.mainPage}/>}/>
                <Route path={MAIN_ROUTES.mainPage} exact render={(props) => {
                    return <Layout><MainBody {...props} /></Layout>
                }}/>
                <Route path={MAIN_ROUTES.questionnaire} exact render={(props) => {
                    return <ClientLayout {...props} guid={props.match.params.guid}/>
                }}/>
                <Route path={MAIN_ROUTES.createBrochure} exact render={(props) => {
                    return <Layout><Brochure {...props}/></Layout>
                }}/>
                <Route path={MAIN_ROUTES.createScenario} exact render={(props) => {
                    return <Layout><Scenario {...props}/></Layout>
                }}/>
                <Route path={MAIN_ROUTES.settings} exact render={(props) => {
                    return <Layout><SettingsPage {...props}/></Layout>
                }}/>
                <Route path={MAIN_ROUTES.scenario_edit} exact render={(props) => {
                    return <Layout><Scenario {...props} id={props.match.params.scenarioId}/></Layout>
                }}/>
                <Route path={MAIN_ROUTES.brochure_edit} exact render={(props) => {
                    return <Layout><Brochure {...props} id={props.match.params.brochureId}/></Layout>
                }}/>
                <Route
                    render={() => <Layout><PageNotFound/> </Layout>}/>
            </Switch>
        );
    }
}
