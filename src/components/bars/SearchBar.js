import React, { useState } from 'react';
import { useStyles } from './SearchBar.style';
import { Paper, Tooltip, IconButton } from '@material-ui/core';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';

import SearchForm from '../forms/SearchForm';

const SearchBar = ({ handleSearchFormClose }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.searchbar} elevation={0} square>
            <div className={classes.searchInputContainer}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    className={classes.searchInput}
                />
                <SearchIcon className={classes.searchIcon} />
            </div>
            <Tooltip title="Filter More...">
                <IconButton onClick={() => handleSearchFormClose()}>
                    <ExpandLessIcon />
                </IconButton>
            </Tooltip>
        </Paper>
    );
};

export default SearchBar;
