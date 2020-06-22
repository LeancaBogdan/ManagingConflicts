import React from 'react';

import classes from './CardBody.module.css';

const cardBody = (props) => {
    let body = null
    if (props.type === "brochure") {
        body = props.info.map(scenario => {
            return (
                <button
                    key={scenario.id}
                    className={classes.Scenario}
                    onClick={() => {
                        props.history.push(`/scenarios/${scenario.id}`
                        )
                    }}>
                    {scenario.name}
                </button>
            );
        })
    } else {
        body = <p className={classes.Description}>{props.info}</p>
    }

    return (
        <div className={classes.CardBody}>
            {body}
        </div>
    );
}

export default cardBody;
