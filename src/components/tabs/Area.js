import React, { useState } from 'react';
import { useStyles } from './Area.style';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Typography, Grid, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import WcIcon from '@material-ui/icons/Wc';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const Area = ({ dataDetail }) => {
    const classes = useStyles();

    const [viewport, setViewport] = useState({
        longitude: dataDetail.lon,
        latitude: dataDetail.lat,
        width: '100%',
        height: '100%',
        zoom: 14,
    });
    const [onPopupClose, setOnPopupClose] = useState(false);

    console.log(dataDetail);

    return (
        <div component="span" className={classes.area}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/viet-tran/ck53yt4us8iho1cqlcz1xaaxq"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                <Marker latitude={dataDetail.lat} longitude={dataDetail.lon}>
                    <img
                        src="/markerRed.svg"
                        alt={dataDetail.name}
                        className={classes.markerIcon}
                    />
                </Marker>
                <Popup longitude={dataDetail.lon} latitude={dataDetail.lat}>
                    <Grid container direction="column" alignItems="center">
                        <Typography component="span" className={classes.poperTitle}>
                            {dataDetail.name}
                        </Typography>
                        <Rating
                            name="read-only"
                            value={dataDetail.ratingAverage}
                            precision={0.1}
                            readOnly
                        />
                        <Typography component="span">{dataDetail.address}</Typography>

                        <div className={classes.divider} />

                        <Grid item container alignItems="center" justify="center">
                            {dataDetail.forDogs ? (
                                <CheckIcon color="primary" />
                            ) : (
                                <CloseIcon color="secondary" />
                            )}
                            <Typography component="span">Suitable for dogs</Typography>
                        </Grid>
                        <Grid item container alignItems="center" justify="center">
                            {dataDetail.winterSwimming ? (
                                <CheckIcon color="primary" />
                            ) : (
                                <CloseIcon color="secondary" />
                            )}
                            <Typography component="span">Winter Swimming</Typography>
                        </Grid>
                    </Grid>
                </Popup>
            </ReactMapGL>
        </div>
    );
};

export default Area;
