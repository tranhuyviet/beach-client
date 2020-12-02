import React, { useContext, useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useStyles } from './HomePage.style';

import { DataContext } from '../../context/dataContext';
import { UIContext } from '../../context/uiContext';

import { useHistory } from 'react-router-dom';
import { Fab, Avatar, Tooltip } from '@material-ui/core';
import FilterIcon from '../../assets/images/filter.svg';
import RoomIcon from '@material-ui/icons/Room';

import SearchForm from '../forms/SearchForm';

import { GET_BEACHES_QUERY } from '../../utils/graphql';
import { /*useQuery,*/ useLazyQuery } from '@apollo/client';
import { getWeatherData } from '../../utils/weatherService';

const HomePage = () => {
    const classes = useStyles();
    const {
        // data: apiData,
        setBeaches,
        beach,
        // setBeachSelected,
        setBeach,
        // algaeData,
        // setAlgaeData,
        weatherData,
        setWeatherData,
    } = useContext(DataContext);
    const { setIsBack, setSearchBarOpen, isBack } = useContext(UIContext);
    const history = useHistory();
    const [searchFormOpen, setSearchFormOpen] = useState(false);

    // FILTER
    const [isHelsinkiSelected, setIsHelsinkiSelected] = useState(false);
    const [isEspooSelected, setIsEspooSelected] = useState(false);
    const [isVantaaSelected, setIsVantaaSelected] = useState(false);
    const [isForDogs, setIsForDogs] = useState(false);
    const [isWinterSwimming, setIsWinterSwimming] = useState(false);
    const [isShower, setIsShower] = useState(false);
    const [isToilet, setIsToilet] = useState(false);
    const [isRestaurant, setIsRestaurant] = useState(false);
    const [isChildren, setIsChildren] = useState(false);
    const [isChanging, setIsChanging] = useState(false);
    const [isGuard, setIsGuard] = useState(false);
    const [isFitness, setIsFitness] = useState(false);
    const [isSport, setIsSport] = useState(false);
    const [isKiosk, setIsKiosk] = useState(false);
    const [isSauna, setIsSauna] = useState(false);
    const [isTemp, setIsTemp] = useState(false);
    const [temp, setTemp] = useState(15);
    const [noAlgae, setNoAlgae] = useState(false);

    const [userPosition, setUserPosition] = useState(false);

    const [viewport, setViewport] = useState({
        longitude: 24.888463,
        latitude: 60.219014,
        width: '100vw',
        height: 'calc(100vh - 50px)',
        zoom: 8.8,
    });

    const [getBeachesQuery, { data }] = useLazyQuery(GET_BEACHES_QUERY, {
        onCompleted(data) {
            // If there is no weatherData in state, load it.
            if (!weatherData) {
                getWeather();
            }
            setBeaches(data.getBeaches);
        },
        onError(error) {
            console.log('ERROR', error);
        },
    });

    const getWeather = async () => {
        const weatherData = await getWeatherData();
        // console.log('weatherData', weatherData);
        setWeatherData(weatherData);
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
            winterSwimming: '',
            isOver18: '',
            noAlgae: '',
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
        }
        if (isWinterSwimming) {
            variables.winterSwimming = 'true';
        }
        if (isShower) {
            variables.shower = 'true';
        }
        if (isToilet) {
            variables.toilet = 'true';
        }
        if (isRestaurant) {
            variables.restaurant = 'true';
        }
        if (isChildren) {
            variables.children = 'true';
        }
        if (isChanging) {
            variables.changing = 'true';
        }
        if (isGuard) {
            variables.guard = 'true';
        }
        if (isFitness) {
            variables.fitness = 'true';
        }
        if (isSport) {
            variables.sport = 'true';
        }
        if (isKiosk) {
            variables.kiosk = 'true';
        }
        if (isSauna) {
            variables.sauna = 'true';
        }
        if (isTemp) {
            variables.temp = temp;
        }

        if (noAlgae) {
            variables.noAlgae = 'true';
        }

        console.log(variables);
        getBeachesQuery({ variables });
    };

    useEffect(() => {
        getBeachesQuery();
        getUserLocation();
    }, [isBack, getBeachesQuery]);

    useEffect(() => {
        if (beach) {
            setViewport({ ...viewport, latitude: beach.lat, longitude: beach.lon, zoom: 14 });
        }
    }, [beach, viewport]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((pos) => console.log('GEO', pos));
    // }, []);

    return (
        <div className={classes.homepage}>
            {/* <SearchBar /> */}

            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/viet-tran/ck80svk49069i1is9zrq5yoae"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                {beach ? (
                    <Marker
                        key={beach.name}
                        latitude={beach.lat}
                        longitude={beach.lon}
                        offsetLeft={-18}
                        offsetTop={-36}
                    >
                        <Tooltip title={beach.name} placement="top" arrow>
                            <img
                                src="/markerRed.svg"
                                alt={beach.name}
                                className={classes.markerIcon}
                                onClick={() => {
                                    history.push(`/${beach.name}`);
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
                                <Marker
                                    key={place.name}
                                    latitude={place.lat}
                                    longitude={place.lon}
                                    offsetLeft={-18}
                                    offsetTop={-36}
                                >
                                    <Tooltip title={place.name} placement="top" arrow>
                                        <img
                                            src="/markerRed.svg"
                                            alt={place.name}
                                            className={classes.markerIcon}
                                            onClick={() => {
                                                history.push(`/${place.name}`);
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
                {userPosition && (
                    <Marker
                        latitude={userPosition.latitude}
                        longitude={userPosition.longitude}
                        offsetLeft={-18}
                        offsetTop={-36}
                    >
                        <Tooltip title="Your location" placement="top" arrow>
                            <RoomIcon color={'primary'} style={{ fontSize: 36 }}></RoomIcon>
                        </Tooltip>
                    </Marker>
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
                isWinterSwimming={isWinterSwimming}
                setIsWinterSwimming={setIsWinterSwimming}
                isShower={isShower}
                setIsShower={setIsShower}
                isToilet={isToilet}
                setIsToilet={setIsToilet}
                isRestaurant={isRestaurant}
                setIsRestaurant={setIsRestaurant}
                isChildren={isChildren}
                setIsChildren={setIsChildren}
                isChanging={isChanging}
                setIsChanging={setIsChanging}
                isGuard={isGuard}
                setIsGuard={setIsGuard}
                isFitness={isFitness}
                setIsFitness={setIsFitness}
                isSport={isSport}
                setIsSport={setIsSport}
                isKiosk={isKiosk}
                setIsKiosk={setIsKiosk}
                isSauna={isSauna}
                setIsSauna={setIsSauna}
                isTemp={isTemp}
                setIsTemp={setIsTemp}
                temp={temp}
                setTemp={setTemp}
                noAlgae={noAlgae}
                setNoAlgae={setNoAlgae}
                filterSubmit={filterSubmit}
            />
        </div>
    );
};

export default HomePage;
