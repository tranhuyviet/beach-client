import React from 'react';
import { useStyles } from './Overview.style';
import { Grid, Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import UimarantaImg from '../../assets/images/uimaranta.jpg';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

import WcIcon from '@material-ui/icons/Wc';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WavesIcon from '@material-ui/icons/Waves';
import FlagIcon from '@material-ui/icons/Flag';

import HSLLogo from '../../assets/images/HSL_logo1.png';
import GoogleMapLogo from '../../assets/images/64px-Google_Maps_icon.svg.png';

const Overview = ({ dataDetail }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" component="span" alignItems="center">
            <Grid item xs={12} component="span">
                <img src={UimarantaImg} alt="uimaranta" className={classes.mainImage} />
            </Grid>
            <Typography component="span" className={classes.name}>
                {dataDetail.meta.name}
            </Typography>
            <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly />
            <Typography component="span" style={{ marginTop: 8 }}>
                Ritokalliontie 18, 00330 Helsinki
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
                        <span className={classes.tempText}>4 m/s</span>{' '}
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                container
                component="span"
                justify="center"
                className={classes.buttonGroup}
            >
                <img src={HSLLogo} alt="hsl" className={classes.logoButton} />
                <img src={GoogleMapLogo} alt="hsl" className={classes.logoButton} />
            </Grid>
        </Grid>
    );
};

export default Overview;

{
    /* <Box className={classes.groupContainer} component="span">
                <StarIcon className={classes.starIcon} />
                <StarIcon className={classes.starIcon} />
                <StarIcon className={classes.starIcon} />
                <StarIcon className={classes.starIcon} />
                <StarHalfIcon className={classes.starIcon} />
            </Box>
            <Grid
                item
                container
                direction="column"
                alignItems="flex-start"
                style={{ width: 'auto' }}
                component="span"
            >
                <Box className={classes.groupContainer} component="span">
                    <WbSunnyIcon className={classes.tempIcon} />
                    <Typography component="span">
                        <span className={classes.tempText}>
                            {dataDetail.data[dataDetail.data.length - 1].temp_air} &#8451;{' '}
                        </span>{' '}
                    </Typography>
                </Box>

                <Box className={classes.groupContainer} component="span">
                    <WavesIcon className={classes.tempIcon} />
                    <Typography component="span">
                        <span className={classes.tempText}>
                            {dataDetail.data[dataDetail.data.length - 1].temp_water} &#8451;
                        </span>{' '}
                    </Typography>
                </Box>
                <Box className={classes.groupContainer} component="span">
                    <UpdateIcon className={classes.tempIcon} />
                    <Typography
                        component="span"
                        style={{
                            marginLeft: 5,

                            fontStyle: 'italic',
                        }}
                    >
                        {moment(dataDetail.meta.file_created).fromNow(true)} ago
                    </Typography>
                </Box>
            </Grid>
            <Box className={`${classes.groupContainer}`} component="span">
                <AccessibleIcon className={classes.serviceIcon} />
                <FastfoodIcon className={classes.serviceIcon} />
                <WcIcon className={classes.serviceIcon} />
                <LocalParkingIcon className={classes.serviceIcon} />
            </Box>
            <Box className={classes.groupContainer} component="span">
                <img src={GraphImg} alt="graph" className={classes.graphImg} />
            </Box>
            <Box className={`${classes.groupContainer}`} component="span">
                <Button variant="outlined" color="primary" style={{ marginRight: 16 }}>
                    Google Map
                </Button>
                <Button variant="outlined" color="primary">
                    HSL Routes
                </Button>
            </Box> */
}
