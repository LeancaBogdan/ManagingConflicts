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
                key={brochure.id}
                type="brochure"
                name={brochure.name}
                body={scenarios}/>
        })
    } else {
        cards = props.scenarios.map(scenario => {
            return <Card
                key={scenario.id}
                type="scenario"
                name={scenario.name}
                body={scenario.description}/>
        })
    }

    return (
        <div className={classes.CardsGrid}>
            <EmptyCard
                clicked={props.emptyClicked}/>
            {cards}
        </div>
    );
}

export default cardsGrid;
