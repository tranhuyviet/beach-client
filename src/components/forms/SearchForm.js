import React, { useState } from 'react';
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
    // Tooltip,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import DoneIcon from '@material-ui/icons/Done';
import WcIcon from '@material-ui/icons/Wc';
// import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';
// import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
// import LocalParkingIcon from '@material-ui/icons/LocalParking';
import PetsIcon from '@material-ui/icons/Pets';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SecurityIcon from '@material-ui/icons/Security';

const SearchForm = ({
    searchFormOpen,
    handleSearchFormClose,
    isHelsinkiSelected,
    setIsHelsinkiSelected,
    isEspooSelected,
    setIsEspooSelected,
    isVantaaSelected,
    setIsVantaaSelected,
    isForDogs,
    setIsForDogs,
    isWinterSwimming,
    setIsWinterSwimming,
    isShower,
    setIsShower,
    isToilet,
    setIsToilet,
    isRestaurant,
    setIsRestaurant,
    isChildren,
    setIsChildren,
    isChanging,
    setIsChanging,
    isGuard,
    setIsGuard,
    isOver18,
    setIsOver18,
    filterSubmit,
    noAlgae,
    setNoAlgae,
}) => {
    const classes = useStyles();
    // const [isHelsinkiSelected, setIsHelsinkiSelected] = useState(false);
    // const [isEspooSelected, setIsEspooSelected] = useState(false);
    // const [isVantaaSelected, setIsVantaaSelected] = useState(false);

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
            <DialogContent style={{ padding: 0 }}>
                <Grid
                    container
                    direction="column"
                    style={{ padding: '0 0 16px 0' }}
                    alignItems="center"
                >
                    <Typography className={classes.title}>LOCATIONS</Typography>
                    <Grid item xs={12} container justify="center">
                        <Button
                            variant={isHelsinkiSelected ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.city}
                            onClick={() => setIsHelsinkiSelected((prev) => !prev)}
                        >
                            Helsinki
                        </Button>
                        <Button
                            variant={isEspooSelected ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.city}
                            onClick={() => setIsEspooSelected((prev) => !prev)}
                        >
                            Espoo
                        </Button>
                        <Button
                            variant={isVantaaSelected ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.city}
                            onClick={() => setIsVantaaSelected((prev) => !prev)}
                        >
                            Vantaa
                        </Button>
                    </Grid>

                    <Typography className={classes.title}>SERVICES</Typography>

                    <Grid item xs={12} container style={{ paddingLeft: 24 }}>
                        {/* <FormControlLabel control={<Checkbox />} label="Suitable for children" /> */}
                        <Button
                            variant={isChildren ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<ChildFriendlyIcon />}
                            onClick={() => setIsChildren((prev) => !prev)}
                        >
                            Suitable for children
                        </Button>
                        <Button
                            variant={isForDogs ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<PetsIcon />}
                            onClick={() => setIsForDogs((prev) => !prev)}
                        >
                            Suitable for dogs
                        </Button>
                        <Button
                            variant={isShower ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setIsShower((prev) => !prev)}
                        >
                            Shower
                        </Button>
                        <Button
                            variant={isToilet ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<WcIcon />}
                            onClick={() => setIsToilet((prev) => !prev)}
                        >
                            Toilet
                        </Button>
                        <Button
                            variant={isRestaurant ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<FastfoodIcon />}
                            onClick={() => setIsRestaurant((prev) => !prev)}
                        >
                            Restaurant
                        </Button>
                        <Button
                            variant={isChanging ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setIsChanging((prev) => !prev)}
                        >
                            Changing Room
                        </Button>
                        <Button
                            variant={isGuard ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<SecurityIcon />}
                            onClick={() => setIsGuard((prev) => !prev)}
                        >
                            Lifeguard
                        </Button>
                        <Button
                            variant={noAlgae ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setNoAlgae((prev) => !prev)}
                        >
                            No algae
                        </Button>
                        <Button
                            variant={isWinterSwimming ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<AcUnitIcon />}
                            onClick={() => setIsWinterSwimming((prev) => !prev)}
                        >
                            Winter swimming
                        </Button>

                        {/* 
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isChildren}
                                    onChange={(event) => setIsChildren(event.target.checked)}
                                />
                            }
                            label="Suitable for children"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isForDogs}
                                    onChange={(event) => setIsForDogs(event.target.checked)}
                                />
                            }
                            label="Suitable for dogs"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isShower}
                                    onChange={(event) => setIsShower(event.target.checked)}
                                />
                            }
                            label="Shower"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isToilet}
                                    onChange={(event) => setIsToilet(event.target.checked)}
                                />
                            }
                            label="Toilet"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isRestaurant}
                                    onChange={(event) => setIsRestaurant(event.target.checked)}
                                />
                            }
                            label="Restaurant"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isOver18}
                                    onChange={(event) => setIsOver18(event.target.checked)}
                                />
                            }
                            label="Water temperature > 18 &#8451;"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={noAlgae}
                                    onChange={(event) => setNoAlgae(event.target.checked)}
                                />
                            }
                            label="No algae"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isWinterSwimming}
                                    onChange={(event) => setIsWinterSwimming(event.target.checked)}
                                />
                            }
                            label="Winter swimming"
                        /> */}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        justify="flex-end"
                        alignItems="center"
                        style={{ marginTop: 8, paddingRight: 24 }}
                    >
                        {/* <FormControlLabel control={<Checkbox />} label="Show closest to me" /> */}
                        <Button
                            variant="contained"
                            color="primary"
                            // style={{ marginTop: 16 }}
                            onClick={() => {
                                handleSearchFormClose();
                                filterSubmit();
                            }}
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
