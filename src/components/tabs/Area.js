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

    // console.log(dataDetail);

    return (
        <div component="span" className={classes.area}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/viet-tran/ck80svk49069i1is9zrq5yoae"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                <Marker latitude={dataDetail.lat} longitude={dataDetail.lon} offsetLeft={-18} offsetTop={-36}>
                    <img
                        src="/markerRed.svg"
                        alt={dataDetail.name}
                        className={classes.markerIcon}
                    />
                </Marker>
            </ReactMapGL>
        </div>
    );
};

export default Area;
