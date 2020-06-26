import React from 'react';

import classes from './CardBody.module.css';

const cardBody = (props) => {
    let body = null
    let menu = null
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
        const cls = [classes.Menu]
        if (props.showMenu) {
            cls.push(classes.Display)
        } 
        menu = <div className={cls.join(' ')}>
            <div 
                className={classes.MenuButton}
                onClick={() => props.history.push(`/brochures/${props.id}`)}>
                    Editează broșura
            </div>
            <div 
            className={classes.MenuButton}
            onClick={() => props.sendClicked(props.id)}>
                Trimite email
            </div>
            <div className={classes.MenuButton}>Descarcă XLS</div>
        </div>
    } else {
        body = <p className={classes.Description}>{props.info}</p>
    }

    return (
        <div className={classes.CardBody}>
            {body}
            {menu}
        </div>
    );
}

export default cardBody;
