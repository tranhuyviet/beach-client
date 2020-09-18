import React from 'react';
import { useStyles } from './SearchForm.style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    Checkbox,
    Grid,
    FormControlLabel,
    Button,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import WcIcon from '@material-ui/icons/Wc';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import PetsIcon from '@material-ui/icons/Pets';

const SearchForm = ({ searchFormOpen, handleSearchFormClose }) => {
    const classes = useStyles();
    return (
        <Dialog open={searchFormOpen} onClose={handleSearchFormClose} className={classes.dialog}>
            <DialogTitle className={classes.dialogTitleContainer}>
                <div className={classes.dialogTitle}>
                    Filter results by...
                    <IconButton
                        color="inherit"
                        onClick={handleSearchFormClose}
                        style={{ marginLeft: 'auto!important' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent>
                <Grid
                    container
                    direction="column"
                    style={{ padding: '0 0 8px 0' }}
                    alignItems="center"
                >
                    <Typography className={classes.title}>LOCATION</Typography>
                    <Grid item xs={12} container justify="center">
                        <Button variant="outlined" color="primary" className={classes.city}>
                            Helsinki
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.city}>
                            Espoo
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.city}>
                            Vantaa
                        </Button>
                    </Grid>
                    {/* <Grid item xs={12} container justify="center">
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Helsinki"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Espoo"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Vantaa"
                            labelPlacement="bottom"
                        />
                    </Grid> */}
                    <Typography className={classes.title}>AMENITIES</Typography>
                    <Grid item xs={12} container justify="center">
                        <WcIcon className={classes.serviceIcon} />
                        <AccessibleForwardIcon className={classes.serviceIcon} />
                        <FastfoodIcon className={classes.serviceIcon} />
                        <SportsVolleyballIcon className={classes.serviceIcon} />
                        <PetsIcon className={classes.serviceIcon} />
                        <LocalParkingIcon className={classes.serviceIcon} />
                    </Grid>
                    <Grid item xs={12} container style={{ marginTop: 16, paddingLeft: 24 }}>
                        <FormControlLabel control={<Checkbox />} label="Suitable for children" />
                        <FormControlLabel control={<Checkbox />} label="Suitable for dogs" />
                        <FormControlLabel control={<Checkbox />} label="Water temperature > 23" />
                        <FormControlLabel control={<Checkbox />} label="No algae" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        justify="space-between"
                        alignItems="center"
                        style={{ marginTop: 16 }}
                    >
                        <FormControlLabel control={<Checkbox />} label="Show closest to me" />
                        <Button
                            variant="contained"
                            color="primary"
                            // style={{ marginTop: 16 }}
                            onClick={handleSearchFormClose}
                        >
                            Apply
                        </Button>
                    </Grid>
                    {/* <Typography className={classes.titleOfFilter}>CITY</Typography>

                    <FormControlLabel control={<Checkbox />} label="Helsinki" />
                    <FormControlLabel control={<Checkbox />} label="Espoo" />
                    <FormControlLabel control={<Checkbox />} label="Vantaa" />
                    <Typography className={classes.titleOfFilter}>OTHER</Typography>
                    <FormControlLabel control={<Checkbox />} label="Suitable for children" />
                    <FormControlLabel control={<Checkbox />} label="Suitable for dogs" />
                    <FormControlLabel control={<Checkbox />} label="Water temperature > 23" />
                    <FormControlLabel control={<Checkbox />} label="No algae" /> */}
                    {/* <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginTop: 16 }}
                        onClick={handleSearchFormClose}
                    >
                        Apply
                    </Button> */}
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default SearchForm;
