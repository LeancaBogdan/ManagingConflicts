import React from 'react';

import classes from './Card.module.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';

const card = (props) => {
    return (
        <div className={classes.Card}>
            <CardHeader
                id={props.id}
                type={props.type}
                title={props.name}
                history={props.history}
            />
            <CardBody
                type={props.type}
                info={props.body}
                history={props.history}
            />
        </div>
    );
}

export default card;
