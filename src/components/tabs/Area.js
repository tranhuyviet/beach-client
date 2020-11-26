import React, { useState, useEffect } from 'react';
import { useStyles } from './Area.style';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { ClickAwayListener } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import Axios from 'axios';

const Area = ({ dataDetail }) => {
    const classes = useStyles();

    const [viewport, setViewport] = useState({
        longitude: dataDetail.lon,
        latitude: dataDetail.lat,
        width: '100%',
        height: '100%',
        zoom: 14,
    });

    const [showPopup, setShowPopup] = useState(null);

    const [nearbyServices, setNearbyServices] = useState([]);

    const areaServicesUrl = `http://www.hel.fi/palvelukarttaws/rest/v4/unit/?lat=${dataDetail.lat}&lon=${dataDetail.lon}&distance=250`;

    useEffect(() => {
        getNearbyServices();
    }, []);

    const getNearbyServices = async () => {
        const response = await await Axios.get(areaServicesUrl);
        const nearbyServices = [];
        if (response) {
            response.data.forEach((service) => {
                nearbyServices.push({
                    name: service.name_fi,
                    lat: service.latitude,
                    lon: service.longitude,
                });
            });
            console.log('nearby services', nearbyServices);
            setNearbyServices(nearbyServices);
        }
    };
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
                <Marker
                    latitude={dataDetail.lat}
                    longitude={dataDetail.lon}
                    offsetLeft={-18}
                    offsetTop={-36}
                >
                    <img
                        src="/markerRed.svg"
                        alt={dataDetail.name}
                        className={classes.markerIcon}
                    />
                </Marker>
                <ClickAwayListener onClickAway={() => setShowPopup(null)}>
                    <div>
                        {nearbyServices &&
                            nearbyServices.map((service, index) => (
                                <div key={index}>
                                    <div
                                        onClick={() => {
                                            setShowPopup(index.toString());
                                        }}
                                    >
                                        <Marker
                                            latitude={service.lat}
                                            longitude={service.lon}
                                            offsetLeft={-18}
                                            offsetTop={-36}
                                        >
                                            <RoomIcon
                                                color={'primary'}
                                                style={{ fontSize: 36 }}
                                                className={classes.serviceMarker}
                                            ></RoomIcon>
                                        </Marker>
                                    </div>

                                    {showPopup && showPopup === index.toString() && (
                                        <Popup
                                            latitude={service.lat}
                                            longitude={service.lon}
                                            closeButton={false}
                                            onClose={() => setShowPopup(null)}
                                            anchor="bottom-left"
                                            offsetTop={-24}
                                            tipSize={8}
                                            className={classes.popup}
                                        >
                                            <div>{service.name}</div>
                                        </Popup>
                                    )}
                                </div>
                            ))}
                    </div>
                </ClickAwayListener>
            </ReactMapGL>
        </div>
    );
};

export default Area;
