import React from 'react';

import classes from './TopBar.module.css';
import ToggleBar from './ToggleBar/ToggleBar';
import Search from '../TopBar/Search/Search';
import Grid from '@material-ui/core/Grid';

const topBar = (props) => {
    return (
        <div className={classes.TopBar}>
            <Grid container justify="space-evenly" alignItems="baseline">
                <Grid item xs={4}/>
                <Grid item xs={4} >
                    <ToggleBar className={classes.Toggle}
                               showBrochures={props.showBrochures}
                               toggleClicked={props.toggleClicked}/>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}  >
                    <Search search={props.search}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default topBar;