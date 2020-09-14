import React, { useContext } from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Grid, Typography, IconButton } from '@material-ui/core';

import PoolIcon from '@material-ui/icons/Pool';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { UIContext } from '../../context/uiContext';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const { isBack, setIsBack } = useContext(UIContext);
    console.log('ISBACK', isBack);
    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container alignItems="center">
                <Grid item xs={6} className={classes.logoContainer} container alignItems="center">
                    <PoolIcon className={classes.logoIcon} />
                    <Typography className={classes.logoText}>RANTAOPAS</Typography>
                </Grid>
                <Grid item xs={6} container justify="flex-end">
                    {!isBack ? (
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                history.push('/');
                                setIsBack(false);
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NavBar;
