import React from 'react';
import { useStyles } from './Overview.style';
import { Grid, Typography, Box, Button, SvgIcon } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import UimarantaImg from '../../assets/images/uimaranta.jpg';

import WavesIcon from '@material-ui/icons/Waves';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NearMeIcon from '@material-ui/icons/NearMe';
import InfoIcon from '@material-ui/icons/Info';
import PetsIcon from '@material-ui/icons/Pets';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WcIcon from '@material-ui/icons/Wc';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SecurityIcon from '@material-ui/icons/Security';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotTubIcon from '@material-ui/icons/HotTub';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ArrowUpward } from '@material-ui/icons';

import { from } from '@apollo/client';

function RoomIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M21.6,18.2L13,11.75v-0.91c1.65-0.49,2.8-2.17,2.43-4.05c-0.26-1.31-1.3-2.4-2.61-2.7C10.54,3.57,8.5,5.3,8.5,7.5h2 C10.5,6.67,11.17,6,12,6s1.5,0.67,1.5,1.5c0,0.84-0.69,1.52-1.53,1.5C11.43,8.99,11,9.45,11,9.99v1.76L2.4,18.2 C1.63,18.78,2.04,20,3,20h9h9C21.96,20,22.37,18.78,21.6,18.2z M6,18l6-4.5l6,4.5H6z" />
        </SvgIcon>
    );
}

const Overview = ({ dataDetail, weather }) => {
    const classes = useStyles();

    function redirect(url) {
        window.open(url);
    }

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString();
    };

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
            {(dataDetail.children ||
                dataDetail.forDogs ||
                dataDetail.shower ||
                dataDetail.toilet ||
                dataDetail.restaurant ||
                dataDetail.changing ||
                dataDetail.guard ||
                dataDetail.fitness ||
                dataDetail.sport ||
                dataDetail.kiosk ||
                dataDetail.sauna ||
                dataDetail.winterSwimming) && (
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    className={classes.serviceContainer}
                    component="span"
                >
                    {dataDetail.children && <ChildFriendlyIcon className={classes.serviceIcon} />}
                    {dataDetail.forDogs && <PetsIcon className={classes.serviceIcon} />}
                    {dataDetail.shower && <BathtubIcon className={classes.serviceIcon} />}
                    {dataDetail.toilet && <WcIcon className={classes.serviceIcon} />}
                    {dataDetail.restaurant && <FastfoodIcon className={classes.serviceIcon} />}
                    {dataDetail.changing && <RoomIcon className={classes.serviceIcon} />}
                    {dataDetail.guard && <SecurityIcon className={classes.serviceIcon} />}
                    {dataDetail.fitness && <FitnessCenterIcon className={classes.serviceIcon} />}
                    {dataDetail.sport && <SportsVolleyballIcon className={classes.serviceIcon} />}
                    {dataDetail.kiosk && <StorefrontIcon className={classes.serviceIcon} />}
                    {dataDetail.sauna && <HotTubIcon className={classes.serviceIcon} />}
                    {dataDetail.winterSwimming && <AcUnitIcon className={classes.serviceIcon} />}
                </Grid>
            )}
            {weather && (
                <Grid
                    item
                    xs={12}
                    container
                    component="span"
                    className={classes.tempContainer}
                    justify="center"
                >
                    <Grid item xs={12} container component="span" justify="center">
                        <Typography
                            component="span"
                            className={`${classes.algaePadding} ${classes.algaeHeader}`}
                        >
                            Säähavainnot
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container component="span" justify="center">
                        <Box className={classes.groupContainer} component="span">
                            <img
                                className={classes.weatherSymbol}
                                src={require(`../../assets/svg/svg/${weather.data.WeatherSymbol3.timeValuePairs[0].value}.svg`)}
                            />
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
                        <ArrowUpward
                            className={classes.tempIcon}
                            style={{
                                transform: `rotate(${weather.data.WindDirection.timeValuePairs[0].value}deg)`,
                            }}
                        />
                        <Typography component="span">
                            <span className={classes.tempText}>
                                {weather.data.WindSpeedMS.timeValuePairs[0].value} m/s
                            </span>{' '}
                        </Typography>
                    </Box>
                    <Box className={classes.groupContainer} component="span">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Aika
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Lämpötila
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Sääsymboli
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Tuulen suunta
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Tuulennopeus
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {weather.data.Temperature.timeValuePairs.map((row, index) => (
                                        <TableRow key={row.time}>
                                            <TableCell component="th" scope="row">
                                                {formatDate(row.time)}
                                            </TableCell>
                                            <TableCell align="right">{row.value}</TableCell>
                                            <TableCell align="right">
                                                <img
                                                    className={classes.weatherSymbol}
                                                    src={require(`../../assets/svg/svg/${weather.data.WeatherSymbol3.timeValuePairs[index].value}.svg`)}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <ArrowUpward
                                                    className={classes.tempIcon}
                                                    style={{
                                                        transform: `rotate(${weather.data.WindDirection.timeValuePairs[index].value}deg)`,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    weather.data.WindSpeedMS.timeValuePairs[index]
                                                        .value
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            )}
            {dataDetail.sighting && (
                <Grid
                    item
                    xs={12}
                    container
                    component="span"
                    justify="center"
                    className={classes.algaeContainer}
                >
                    <Grid item xs={12} container component="span" justify="center">
                        <Typography
                            component="span"
                            className={`${classes.algaePadding} ${classes.algaeHeader}`}
                        >
                            Levähavainto
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container component="span" justify="center">
                        <Typography component="span" className={classes.algaePadding}>
                            <InfoIcon className={classes.tempIcon} />
                            <span className={classes.algaeText}>
                                {dataDetail.sighting.text}
                            </span>{' '}
                        </Typography>
                        <Typography component="span" className={classes.algaePadding}>
                            <CalendarTodayIcon className={classes.tempIcon} />
                            <span className={classes.algaeText}>
                                {dataDetail.sighting.date} päivää sitten
                            </span>{' '}
                        </Typography>
                    </Grid>

                    <Typography component="span">
                        <NearMeIcon className={classes.tempIcon} />
                        <span className={classes.algaeText}>
                            {dataDetail.sighting.distance} metriä rannasta
                        </span>{' '}
                    </Typography>
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
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.routingButton}
                    onClick={() => {
                        redirect(dataDetail.hslUrl);
                    }}
                >
                    Avaa reittioppaassa
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.routingButton}
                    onClick={() => {
                        redirect(dataDetail.mapsUrl);
                    }}
                >
                    Avaa Google Mapsissa
                </Button>
            </Grid>
        </Grid>
    );
};

export default Overview;
