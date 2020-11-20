import React from 'react';
import { useStyles } from './Overview.style';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import UimarantaImg from '../../assets/images/uimaranta.jpg';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

import WcIcon from '@material-ui/icons/Wc';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WavesIcon from '@material-ui/icons/Waves';
import FlagIcon from '@material-ui/icons/Flag';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NearMeIcon from '@material-ui/icons/NearMe';
import InfoIcon from '@material-ui/icons/Info';

import HSLLogo from '../../assets/images/HSL_logo1.png';
import GoogleMapLogo from '../../assets/images/64px-Google_Maps_icon.svg.png';

const Overview = ({ dataDetail, algaeSighting, weather }) => {
    const classes = useStyles();

    function redirect(url) {
        window.open(url);
    }

    return (
        <Grid container direction="column" component="span" alignItems="center">
            <Grid item xs={12} component="span">
                <img src={UimarantaImg} alt="uimaranta" className={classes.mainImage} />
            </Grid>
            <Typography component="span" className={classes.name}>
                {dataDetail.name}
            </Typography>
            <Grid item component="span" container justify="center" alignItems="center">
                <Rating
                    name="read-only"
                    value={dataDetail.ratingAverage}
                    precision={0.1}
                    readOnly
                />
                <Typography
                    component="span"
                    style={{ marginLeft: 4 }}
                >{`(${dataDetail.reviews.length})`}</Typography>
            </Grid>
            <Typography component="span" style={{ marginTop: 8 }}>
                {`${dataDetail.address}, ${dataDetail.city}`}
            </Typography>
            <Grid
                item
                xs={12}
                container
                component="span"
                justify="center"
                alignItems="center"
                style={{ marginTop: 16 }}
            >
                <AccessTimeIcon style={{ fontSize: 32, marginRight: 8 }} />
                <Typography component="span">OPEN</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                container
                justify="center"
                className={classes.serviceContainer}
                component="span"
            >
                <AccessibleForwardIcon className={classes.serviceIcon} />
                <WcIcon className={classes.serviceIcon} />
                <FastfoodIcon className={classes.serviceIcon} />
            </Grid>
            <Grid
                item
                xs={12}
                container
                component="span"
                className={classes.tempContainer}
                justify="center"
            >
                <Grid item xs={12} container component="span" justify="center">
                    <Box className={classes.groupContainer} component="span">
                        <WbSunnyIcon className={`${classes.tempIcon} ${classes.tempIconBig}`} />
                        <Typography component="span">
                            <span className={`${classes.tempText} ${classes.tempTextBig}`}>
                                {dataDetail.data[dataDetail.data.length - 1].temp_air} &#8451;{' '}
                            </span>{' '}
                        </Typography>
                    </Box>
                </Grid>
                <Box className={classes.groupContainer} component="span">
                    <WavesIcon className={classes.tempIcon} />
                    <Typography component="span">
                        <span className={classes.tempText}>
                            {dataDetail.data[dataDetail.data.length - 1].temp_water} &#8451;
                        </span>{' '}
                    </Typography>
                </Box>
                <Box className={classes.groupContainer} component="span">
                    <FlagIcon className={classes.tempIcon} />
                    <Typography component="span">
                        <span className={classes.tempText}>{weather.data.WindSpeedMS.timeValuePairs[0].value} m/s</span>{' '}
                    </Typography>
                </Box>
            </Grid>
            {algaeSighting.sighting && (
                <Grid
                    item
                    xs={12}
                    container
                    component="span"
                    justify="center"
                    className={classes.algaeContainer}
                >
                    <Grid item xs={12} container component="span" justify="center">
                        <Typography component="span" className={classes.algaePadding}>
                            <InfoIcon className={classes.tempIcon} />
                            <span className={classes.tempText}>
                                {algaeSighting.sighting.printouts['Display fi']}
                            </span>{' '}
                        </Typography>
                        <Typography component="span" className={classes.algaePadding}>
                            <CalendarTodayIcon className={classes.tempIcon} />
                            <span className={classes.tempText}>
                                {algaeSighting.date} päivää sitten
                            </span>{' '}
                        </Typography>
                    </Grid>

                    <Typography component="span">
                        <NearMeIcon className={classes.tempIcon} />
                        <span className={classes.tempText}>
                            {algaeSighting.distance} metriä rannasta
                        </span>{' '}
                    </Typography>
                </Grid>
            )}
            {weather && (
                <Grid item xs={12} container component="span" justify="center" className={classes.algaeContainer}>
                </Grid>
            )}

            <Grid
                item
                xs={12}
                container
                component="span"
                justify="center"
                className={classes.buttonGroup}
            >
                
                <Button variant="contained" color="primary" className={classes.routingButton} onClick={() => {
                        redirect(algaeSighting.hslUrl);
                    }}>
                    Avaa reittioppaassa
                </Button>
                <Button variant="contained" color="primary" className={classes.routingButton} onClick={() => {
                        redirect(algaeSighting.mapsUrl);
                    }}>
                    Avaa Google Mapsissa
                </Button>
            </Grid>
        </Grid>
    );
};

export default Overview;
