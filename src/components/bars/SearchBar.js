import React, { useState } from 'react';
import { useStyles } from './SearchBar.style';
import { Paper, Tooltip, IconButton } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';

import SearchForm from '../forms/SearchForm';

const SearchBar = () => {
    const classes = useStyles();
    const [searchFormOpen, setSearchFormOpen] = useState(false);

    const handleSearchFormClose = () => {
        setSearchFormOpen(false);
    };

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
                <IconButton onClick={() => setSearchFormOpen(true)}>
                    <ExpandLessIcon />
                </IconButton>
            </Tooltip>
            <SearchForm
                searchFormOpen={searchFormOpen}
                handleSearchFormClose={handleSearchFormClose}
            />
        </Paper>
    );
};

export default SearchBar;
