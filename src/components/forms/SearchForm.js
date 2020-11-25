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
    Slider,
    // Tooltip,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import DoneIcon from '@material-ui/icons/Done';
import WcIcon from '@material-ui/icons/Wc';
// import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
// import LocalParkingIcon from '@material-ui/icons/LocalParking';
import PetsIcon from '@material-ui/icons/Pets';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SecurityIcon from '@material-ui/icons/Security';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WavesIcon from '@material-ui/icons/Waves';

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
    isFitness,
    setIsFitness,
    isSport,
    setIsSport,
    isKiosk,
    setIsKiosk,
    isSauna,
    setIsSauna,
    isTemp,
    setIsTemp,
    temp,
    setTemp,
    filterSubmit,
    noAlgae,
    setNoAlgae,
}) => {
    const classes = useStyles();
    // const [isHelsinkiSelected, setIsHelsinkiSelected] = useState(false);
    // const [isEspooSelected, setIsEspooSelected] = useState(false);
    // const [isVantaaSelected, setIsVantaaSelected] = useState(false);
    const marks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 5,
            label: '5°C',
        },
        {
            value: 10,
            label: '10°C',
        },
        {
            value: 15,
            label: '15°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 25,
            label: '25°C',
        },
        {
            value: 30,
            label: '30°C',
        },
    ];

    const tempHandleChange = (event, newValue) => {
        setTemp(newValue);
    };

    return (
        <Dialog open={searchFormOpen} onClose={handleSearchFormClose} className={classes.dialog}>
            <DialogTitle className={classes.dialogTitleContainer}>
                <div className={classes.dialogTitle}>
                    Rajaa hakua
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
                    <Typography className={classes.title}>KAUPUNGIT</Typography>
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

                    <Typography className={classes.title}>PALVELUT</Typography>

                    <Grid item xs={12} container style={{ paddingLeft: 16, paddingRight: 16 }}>
                        {/* <FormControlLabel control={<Checkbox />} label="Suitable for children" /> */}
                        <Button
                            variant={isChildren ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<ChildFriendlyIcon />}
                            onClick={() => setIsChildren((prev) => !prev)}
                        >
                            Lapsiystävällinen
                        </Button>
                        <Button
                            variant={isForDogs ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<PetsIcon />}
                            onClick={() => setIsForDogs((prev) => !prev)}
                        >
                            Koiraystävällinen
                        </Button>
                        <Button
                            variant={isShower ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setIsShower((prev) => !prev)}
                        >
                            Suihku
                        </Button>
                        <Button
                            variant={isToilet ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<WcIcon />}
                            onClick={() => setIsToilet((prev) => !prev)}
                        >
                            WC
                        </Button>
                        <Button
                            variant={isRestaurant ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<FastfoodIcon />}
                            onClick={() => setIsRestaurant((prev) => !prev)}
                        >
                            Ravintola
                        </Button>
                        <Button
                            variant={isChanging ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setIsChanging((prev) => !prev)}
                        >
                            Pukuhuone
                        </Button>
                        <Button
                            variant={isGuard ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<SecurityIcon />}
                            onClick={() => setIsGuard((prev) => !prev)}
                        >
                            Uimavalvonta
                        </Button>
                        <Button
                            variant={isFitness ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<FitnessCenterIcon />}
                            onClick={() => setIsFitness((prev) => !prev)}
                        >
                            Fitness
                        </Button>
                        <Button
                            variant={isSport ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<SportsVolleyballIcon />}
                            onClick={() => setIsSport((prev) => !prev)}
                        >
                            Urheilu
                        </Button>
                        <Button
                            variant={isKiosk ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<StorefrontIcon />}
                            onClick={() => setIsKiosk((prev) => !prev)}
                        >
                            Kioski
                        </Button>
                        <Button
                            variant={isSauna ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setIsSauna((prev) => !prev)}
                        >
                            Sauna
                        </Button>
                        <Button
                            variant={noAlgae ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            onClick={() => setNoAlgae((prev) => !prev)}
                        >
                            Ei levähavaintoja
                        </Button>
                        <Button
                            variant={isWinterSwimming ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<AcUnitIcon />}
                            onClick={() => setIsWinterSwimming((prev) => !prev)}
                        >
                            Avantouinti
                        </Button>
                        <Button
                            variant={isTemp ? 'contained' : 'outlined'}
                            color="primary"
                            className={classes.services}
                            startIcon={<WavesIcon />}
                            onClick={() => setIsTemp((prev) => !prev)}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            Water Temperature Over &nbsp;
                            <span
                                style={{ fontWeight: 'bold', fontSize: '12px' }}
                            >{` ${temp}°C`}</span>
                        </Button>
                        {isTemp && (
                            <div className={classes.sliderContainer}>
                                <Slider
                                    defaultValue={15}
                                    // color="secondary"
                                    // getAriaValueText={valuetext}
                                    onChange={tempHandleChange}
                                    aria-labelledby="discrete-slider"
                                    // valueLabelDisplay="auto"
                                    step={5}
                                    marks={marks}
                                    min={0}
                                    max={30}
                                    className={classes.slider}
                                />
                            </div>
                        )}

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
                            Hae
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
