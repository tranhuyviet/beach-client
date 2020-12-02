import React from 'react';
import { useStyles } from './SearchForm.style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    Grid,
    Button,
    Slider,
    SvgIcon,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import WcIcon from '@material-ui/icons/Wc';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import PetsIcon from '@material-ui/icons/Pets';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SecurityIcon from '@material-ui/icons/Security';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WavesIcon from '@material-ui/icons/Waves';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotTubIcon from '@material-ui/icons/HotTub';

function RoomIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M21.6,18.2L13,11.75v-0.91c1.65-0.49,2.8-2.17,2.43-4.05c-0.26-1.31-1.3-2.4-2.61-2.7C10.54,3.57,8.5,5.3,8.5,7.5h2 C10.5,6.67,11.17,6,12,6s1.5,0.67,1.5,1.5c0,0.84-0.69,1.52-1.53,1.5C11.43,8.99,11,9.45,11,9.99v1.76L2.4,18.2 C1.63,18.78,2.04,20,3,20h9h9C21.96,20,22.37,18.78,21.6,18.2z M6,18l6-4.5l6,4.5H6z" />
        </SvgIcon>
    );
}

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
                            startIcon={<BathtubIcon />}
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
                            startIcon={<RoomIcon />}
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
                            startIcon={<HotTubIcon />}
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
                            Veden Lämpötila Yli&nbsp;
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
                                    step={1}
                                    marks={marks}
                                    min={0}
                                    max={30}
                                    className={classes.slider}
                                />
                            </div>
                        )}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        justify="flex-end"
                        alignItems="center"
                        style={{ marginTop: 8, paddingRight: 24 }}
                    >
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
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default SearchForm;
