import React from 'react';

import classes from './CardsGrid.module.css';
import Card from './Card/Card';
import EmptyCard from './EmptyCard/EmptyCard'

const cardsGrid = (props) => {
    let cards;

    if (props.showBrochures) {
        cards = props.brochures.map(brochure => {
            const scenarios = []
            props.scenarios.forEach(scenario => {
                if (scenario.brochure_id === brochure.id) {
                    scenarios.push({id: scenario.id, name: scenario.name})
                }
            })
            return <Card
                id={brochure.id}
                type="brochure"
                name={brochure.name}
                body={scenarios}
                history={props.history}
            />
        })
    } else {
        cards = props.scenarios.map(scenario => {
            return <Card
                id={scenario.id}
                type="scenario"
                name={scenario.name}
                body={scenario.description}
                history={props.history}
            />
        })
    }

    return (
        <div className={classes.CardsGrid}>
            <EmptyCard isBrochure={props.showBrochures} history={props.history}/>
            {cards}
        </div>
    );
}

export default cardsGrid;
