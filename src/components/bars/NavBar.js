import React, { useContext, useState } from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Grid, Typography, IconButton, Tooltip } from '@material-ui/core';

import PoolIcon from '@material-ui/icons/Pool';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';

import { UIContext } from '../../context/uiContext';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import { DataContext } from '../../context/dataContext';

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const { isBack, setIsBack, searchBarOpen, setSearchBarOpen } = useContext(UIContext);
    const { setBeach } = useContext(DataContext);
    // const [searchBarOpen, setSearchBarOpen] = useState(false);
    // console.log('ISBACK', isBack);
    const handleSearchFormClose = () => {
        setSearchBarOpen(false);
        setBeach(null);
    };
    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container alignItems="center">
                <Grid item xs={8} className={classes.logoContainer} container alignItems="center">
                    <PoolIcon className={classes.logoIcon} />
                    <Typography className={classes.logoText}>RANTAOPAS</Typography>
                </Grid>
                <Grid item xs={4} container justify="flex-end">
                    {!isBack ? (
                        <Tooltip title="Show Search Name">
                            <IconButton
                                color="inherit"
                                onClick={() => setSearchBarOpen((prev) => !prev)}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <IconButton
                            onClick={() => {
                                history.push('/');
                                setIsBack(false);
                                setBeach(null);
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
