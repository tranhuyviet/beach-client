import React from 'react';
import { useStyles } from './Area.style';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Rating from '@material-ui/lab/Rating';

import WcIcon from '@material-ui/icons/Wc';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const Area = ({ meta }) => {
    const classes = useStyles();
    console.log(meta);
    function Map() {
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: meta.lat, lng: meta.lon }}
                options={{
                    fullscreenControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
            >
                {meta && (
                    <Marker
                        key={meta.name}
                        position={{ lat: meta.lat, lng: meta.lon }}
                        icon={{
                            url: '/markerRed.svg',
                            scaledSize: new window.google.maps.Size(35, 35),
                        }}
                    >
                        <InfoWindow>
                            <div className={classes.infoContainer}>
                                <p className={classes.nameInfo}>{meta.name}</p>
                                <Rating
                                    name="read-only"
                                    defaultValue={4.5}
                                    precision={0.5}
                                    readOnly
                                    size="small"
                                />
                                <div>
                                    <AccessibleForwardIcon className={classes.serviceIcon} />
                                    <WcIcon className={classes.serviceIcon} />
                                    <FastfoodIcon className={classes.serviceIcon} />
                                </div>
                            </div>
                        </InfoWindow>
                    </Marker>
                )}
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));
    return (
        <div component="span" className={classes.area}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                component="span"
            />
        </div>
    );
};

export default Area;
