import React, { useContext, useState, useEffect } from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import ReactMapGL, { Marker } from 'react-map-gl';
// import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { useStyles } from './HomePage.style';
// import PoolIcon from '@material-ui/icons/Pool';

import { DataContext } from '../../context/dataContext';
import { UIContext } from '../../context/uiContext';

import SearchBar from '../bars/SearchBar';
import { useHistory } from 'react-router-dom';
import { Fab, Avatar, Tooltip } from '@material-ui/core';
import FilterIcon from '../../assets/images/filter.svg';
import Footer from '../bars/Footer';
import SearchForm from '../forms/SearchForm';
import { FilterDrama } from '@material-ui/icons';

import { GET_BEACHES_QUERY } from '../../utils/graphql';
import { useQuery, useLazyQuery } from '@apollo/client';
import _ from 'lodash';
import { getAlgaeData } from '../../utils/algaeService';

const HomePage = () => {
    const classes = useStyles();
    const {
        data: apiData,
        setBeaches,
        beach,
        setBeachSelected,
        setBeach,
        algaeData,
        setAlgaeData,
    } = useContext(DataContext);
    const { setIsBack, setSearchBarOpen, isBack } = useContext(UIContext);
    const history = useHistory();
    const [searchFormOpen, setSearchFormOpen] = useState(false);

    // FILTER
    const [isHelsinkiSelected, setIsHelsinkiSelected] = useState(false);
    const [isEspooSelected, setIsEspooSelected] = useState(false);
    const [isVantaaSelected, setIsVantaaSelected] = useState(false);
    const [isForDogs, setIsForDogs] = useState(false);

    const [userPosition, setUserPosition] = useState(false);

    const [viewport, setViewport] = useState({
        longitude: 24.857463,
        latitude: 60.219014,
        width: '100vw',
        height: 'calc(100vh - 50px)',
        zoom: 9.4,
    });

    const [getBeachesQuery, { data }] = useLazyQuery(GET_BEACHES_QUERY, {
        onCompleted(data) {
            console.log('COMPLETED', data);
            if (!algaeData) {
                getAlgaeSightings(data.getBeaches);
            }
            setBeaches(data.getBeaches);
        },
        onError(error) {
            console.log('ERROR', error);
        },
    });

    const getAlgaeSightings = async (beaches) => {
        const data = await getAlgaeData(beaches);
        setAlgaeData(data);
    };

    const getUserLocation = () => {
        if (navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    setUserPosition(position.coords);
                }
            });
        }
    };

    const handleSearchFormClose = () => {
        setSearchFormOpen(false);
    };

    const filterSubmit = () => {
        const variables = {
            city: [],
            forDogs: '',
        };
        if (isHelsinkiSelected) {
            variables.city.push('Helsinki');
        }
        if (isEspooSelected) {
            variables.city.push('Espoo');
        }
        if (isVantaaSelected) {
            variables.city.push('Vantaa');
        }
        if (isForDogs) {
            variables.forDogs = 'true';
        } else {
            variables.forDogs = '';
        }

        getBeachesQuery({ variables });
    };

    useEffect(() => {
        console.log('isback', isBack);
        getBeachesQuery();
        getUserLocation();
    }, [isBack]);

    useEffect(() => {
        if (beach) {
            setViewport({ ...viewport, latitude: beach.lat, longitude: beach.lon });
        }
    }, [beach]);

    console.log('DATA LOAD FROM SERVER', data, beach);
    // console.log('DATA LOAD FROM API', apiData);

    // function Map() {
    //     let latAverage;
    //     let lonAverage;
    //     if (data && data.getBeaches) {
    //         latAverage = _.meanBy(data.getBeaches, 'lat');
    //         lonAverage = _.meanBy(data.getBeaches, 'lon');
    //     }

    //     console.log('LOCATION AVERAGE', latAverage, lonAverage);
    //     const defaultCenter = {
    //         lat: beach ? beach.lat : 60.219014,
    //         lng: beach ? beach.lon : 24.857463,
    //     };

    //     return (
    //         <GoogleMap
    //             defaultZoom={beach ? 14 : 10}
    //             // defaultCenter={{ lat: 60.219014, lng: 24.857463 }}
    //             defaultCenter={defaultCenter}
    //             options={{
    //                 fullscreenControl: false,
    //                 zoomControl: false,
    //                 streetViewControl: false,
    //                 mapTypeControl: false,
    //             }}
    //         >
    //             {beach ? (
    //                 <Marker
    //                     key={beach.name}
    //                     position={{ lat: beach.lat, lng: beach.lon }}
    //                     onClick={() => {
    //                         console.log(beach.name);
    //                         history.push(`/${beach.name}`);
    //                         // setBeachSelected(beach.name);
    //                         setBeach(beach);
    //                         setIsBack(true);
    //                         setSearchBarOpen(false);
    //                     }}
    //                     icon={{
    //                         url: '/markerRed.svg',
    //                         scaledSize: new window.google.maps.Size(35, 35),
    //                     }}
    //                 ></Marker>
    //             ) : (
    //                 <>
    //                     {data &&
    //                         data.getBeaches &&
    //                         data.getBeaches.map((place) => (
    //                             <Marker
    //                                 key={place.name}
    //                                 position={{ lat: place.lat, lng: place.lon }}
    //                                 onClick={() => {
    //                                     console.log(place.name);
    //                                     history.push(`/${place.name}`);
    //                                     // setBeachSelected(place.name);
    //                                     setBeach(place);
    //                                     setIsBack(true);
    //                                     setSearchBarOpen(false);
    //                                 }}
    //                                 icon={{
    //                                     url: '/markerRed.svg',
    //                                     scaledSize: new window.google.maps.Size(35, 35),
    //                                 }}
    //                             >
    //                                 {/* <InfoWindow>
    //                             <p>{place.meta.name}</p>
    //                         </InfoWindow> */}
    //                             </Marker>
    //                         ))}
    //                 </>
    //             )}
    //             {userPosition && (
    //                 <Marker
    //                     position={{ lat: userPosition.latitude, lng: userPosition.longitude }}
    //                 ></Marker>
    //             )}
    //         </GoogleMap>
    //     );
    // }

    // const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div className={classes.homepage}>
            {/* <SearchBar /> */}
            {/* <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> */}
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/viet-tran/ck53yt4us8iho1cqlcz1xaaxq"
                onViewportChange={(viewport) => {
                    if (beach) {
                        setViewport({ ...viewport, latitude: beach.lat, longitude: beach.lon });
                    } else {
                        setViewport(viewport);
                    }
                }}
            >
                {beach ? (
                    <Marker key={beach.name} latitude={beach.lat} longitude={beach.lon}>
                        <Tooltip title={beach.name}>
                            <img
                                src="/markerRed.svg"
                                alt={beach.name}
                                className={classes.markerIcon}
                                onClick={() => {
                                    console.log(beach.name);
                                    history.push(`/${beach.name}`);
                                    // setBeachSelected(beach.name);
                                    setBeach(beach);
                                    setIsBack(true);
                                    setSearchBarOpen(false);
                                }}
                            />
                        </Tooltip>
                    </Marker>
                ) : (
                    <>
                        {data &&
                            data.getBeaches &&
                            data.getBeaches.map((place) => (
                                <Marker key={place.name} latitude={place.lat} longitude={place.lon}>
                                    <Tooltip title={place.name} placement="top" arrow>
                                        <img
                                            src="/markerRed.svg"
                                            alt={place.name}
                                            className={classes.markerIcon}
                                            onClick={() => {
                                                console.log(place.name);
                                                history.push(`/${place.name}`);
                                                // setBeachSelected(place.name);
                                                setBeach(place);
                                                setIsBack(true);
                                                setSearchBarOpen(false);
                                            }}
                                        />
                                    </Tooltip>
                                </Marker>
                            ))}
                    </>
                )}
            </ReactMapGL>
            <Fab
                color="primary"
                size="large"
                className={classes.fab}
                onClick={() => {
                    setSearchFormOpen(true);
                    setSearchBarOpen(false);
                }}
            >
                <Avatar variant="square" src={FilterIcon} style={{ width: 25, height: 25 }} />
            </Fab>
            {/* <Footer /> */}
            <SearchForm
                searchFormOpen={searchFormOpen}
                handleSearchFormClose={handleSearchFormClose}
                isHelsinkiSelected={isHelsinkiSelected}
                setIsHelsinkiSelected={setIsHelsinkiSelected}
                isEspooSelected={isEspooSelected}
                setIsEspooSelected={setIsEspooSelected}
                isVantaaSelected={isVantaaSelected}
                setIsVantaaSelected={setIsVantaaSelected}
                isForDogs={isForDogs}
                setIsForDogs={setIsForDogs}
                filterSubmit={filterSubmit}
            />
        </div>
    );
};

export default HomePage;
