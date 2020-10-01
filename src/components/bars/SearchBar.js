import React, { useState, useContext } from 'react';
import { useStyles } from './SearchBar.style';
import { Paper, Tooltip, IconButton, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';

import SearchForm from '../forms/SearchForm';
import Fade from 'react-reveal/Fade';
import { DataContext } from '../../context/dataContext';

const SearchBar = ({ handleSearchFormClose }) => {
    const classes = useStyles();
    const { beaches, setBeach } = useContext(DataContext);
    const [value, setValue] = useState(null);

    function onSubmit(event) {
        event.preventDefault();
        // console.log('submit', value);
        setBeach(value);
    }

    // console.log('SEARCH BAR DATA SERVER', beaches);
    return (
        <Paper className={classes.searchbar} elevation={0} square>
            <div className={classes.searchInputContainer}>
                {/* <input
                    type="text"
                    placeholder="Search by name..."
                    className={classes.searchInput}
                />
                <SearchIcon className={classes.searchIcon} /> */}
                <form onSubmit={onSubmit} style={{ margin: 0, padding: 0 }}>
                    <Autocomplete
                        // freeSolo
                        // disableClearable
                        // options={beaches.map((beach) => beach.name)}
                        autoSelect
                        options={beaches}
                        getOptionLabel={(option) => option.name}
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                margin="normal"
                                variant="outlined"
                                placeholder="Search by name..."
                                InputProps={{ ...params.InputProps }}
                            />
                        )}
                    />
                </form>
            </div>
            <Tooltip title="Search">
                <IconButton onClick={(event) => onSubmit(event)} style={{ marginTop: 8 }}>
                    <SearchIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Hide Search Name">
                <IconButton onClick={() => handleSearchFormClose()} style={{ marginTop: 8 }}>
                    <ExpandLessIcon />
                </IconButton>
            </Tooltip>
        </Paper>
    );
};

export default SearchBar;
