import React from 'react';
import { useStyles } from './Graph.style';
import GraphImg from '../../assets/images/graph.png';
import { Grid, Typography } from '@material-ui/core';

const Graph = () => {
    const classes = useStyles();
    return (
        <Grid container component="span" direction="column" alignItems="center">
            <Grid item xs={12} container component="span" direction="column">
                <Typography component="span" className={classes.title}>
                    Air Temperature:
                </Typography>
                <img src={GraphImg} alt="graph" className={classes.graphImg} />
            </Grid>
            <Grid
                item
                xs={12}
                container
                component="span"
                direction="column"
                style={{ marginTop: 30 }}
            >
                <Typography component="span" className={classes.title}>
                    Water Temperature:
                </Typography>
                <img src={GraphImg} alt="graph" className={classes.graphImg} />
            </Grid>
        </Grid>
    );
};

export default Graph;
