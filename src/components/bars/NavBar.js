import React, { useContext, useState } from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Grid, Typography, IconButton } from '@material-ui/core';

import PoolIcon from '@material-ui/icons/Pool';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';

import { UIContext } from '../../context/uiContext';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import Fade from 'react-reveal/Fade';

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const { isBack, setIsBack } = useContext(UIContext);
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    // console.log('ISBACK', isBack);
    const handleSearchFormClose = () => {
        setSearchBarOpen(false);
    };
    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container alignItems="center">
                <Grid item xs={6} className={classes.logoContainer} container alignItems="center">
                    <PoolIcon className={classes.logoIcon} />
                    <Typography className={classes.logoText}>RANTAOPAS</Typography>
                </Grid>
                <Grid item xs={6} container justify="flex-end">
                    {!isBack ? (
                        <IconButton
                            color="inherit"
                            onClick={() => setSearchBarOpen((prev) => !prev)}
                        >
                            <SearchIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                history.push('/');
                                setIsBack(false);
                            }}
                            color="inherit"
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                </Grid>
            </Grid>
            {searchBarOpen && <SearchBar handleSearchFormClose={handleSearchFormClose} />}
        </Paper>
    );
};

export default NavBar;
