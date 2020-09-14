import React from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Grid, Typography, IconButton } from '@material-ui/core';

import PoolIcon from '@material-ui/icons/Pool';
import MenuIcon from '@material-ui/icons/Menu';

import SearchBar from './SearchBar';

const NavBar = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container alignItems="center">
                <Grid item xs={6} className={classes.logoContainer} container alignItems="center">
                    <PoolIcon className={classes.logoIcon} />
                    <Typography className={classes.logoText}>RANTAOPAS</Typography>
                </Grid>
                <Grid item xs={6} container justify="flex-end">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <SearchBar />
        </Paper>
    );
};

export default NavBar;
