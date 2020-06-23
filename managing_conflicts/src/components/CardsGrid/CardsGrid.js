import React from 'react';

import classes from './CardsGrid.module.css';
import Card from './Card/Card';
import EmptyCard from './EmptyCard/EmptyCard'

const cardsGrid = (props) => {
    let cards;

    if (props.showBrochures) {
        cards = props.brochures.map(brochure => {
            const scenarios = []
            const brochureScenarios = [...props.brochureScenarios]
            brochureScenarios.map(bs => {
                if (bs.brochureId === brochure.id) {
                    const index = props.scenarios.findIndex(scenario => scenario.id === bs.scenarioId)
                    if (index !== -1) {
                        const name = props.scenarios[index].name
                        scenarios.push({id: bs.scenarioId, name: name})
                    }
                    
                }
            })
            return <Card
                key={brochure.id}
                id={brochure.id}
                type="brochure"
                name={brochure.name}
                body={scenarios}
                history={props.history}
                deleted={props.deleted}
                sendEmail={props.sendEmail}
            />
        })
    } else {
        cards = props.scenarios.map(scenario => {
            return <Card
                key={scenario.id}
                id={scenario.id}
                type="scenario"
                name={scenario.name}
                body={scenario.description}
                history={props.history}
                deleted={props.deleted}
            />
        })
    }

    return (
        <div className={classes.CardsGrid}>
            <EmptyCard isBrochure={props.showBrochures} history={props.history} clicked={props.showModal}/>
            {cards}
        </div>
    );
}

export default cardsGrid;
