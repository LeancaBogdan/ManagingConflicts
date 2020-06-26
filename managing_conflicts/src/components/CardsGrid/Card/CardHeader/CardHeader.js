import React from 'react';

import classes from './CardHeader.module.css'
import {Delete, Edit, MoreHoriz} from '@material-ui/icons';

const cardHeader = (props) => {
    const rightCorner = props.type === "brochure" ?
        <MoreHoriz className={classes.RightElement} onClick={props.menuClicked}/> :
        <Edit
            className={classes.RightElement}
            onClick={() => {
                props.history.push(`/scenarios/${props.id}`)
            }}/>

    return (
        <div className={classes.CardHeader}>
            <Delete className={classes.LeftElement} onClick={() => props.deleted(props.id)}/>
            <p><strong>{props.title}</strong></p>
            {rightCorner}
        </div>
    );
}

export default cardHeader;
