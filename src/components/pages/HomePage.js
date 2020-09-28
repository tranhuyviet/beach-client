import React, { useContext, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
// import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { useStyles } from './HomePage.style';
// import PoolIcon from '@material-ui/icons/Pool';

import { DataContext } from '../../context/dataContext';
import { UIContext } from '../../context/uiContext';

import SearchBar from '../bars/SearchBar';
import { useHistory } from 'react-router-dom';
import { Fab, Avatar } from '@material-ui/core';
import FilterIcon from '../../assets/images/filter.svg';
import Footer from '../bars/Footer';
import SearchForm from '../forms/SearchForm';
import { FilterDrama } from '@material-ui/icons';

import { GET_BEACHES_QUERY } from '../../utils/graphql';
import { useQuery } from '@apollo/client';

const HomePage = () => {
    const classes = useStyles();
    // const { data } = useContext(DataContext);
    const { setIsBack } = useContext(UIContext);
    const history = useHistory();
    const [searchFormOpen, setSearchFormOpen] = useState(false);

    // FILTER
    const [isHelsinkiSelected, setIsHelsinkiSelected] = useState(false);
    const [isEspooSelected, setIsEspooSelected] = useState(false);
    const [isVantaaSelected, setIsVantaaSelected] = useState(false);
    const [isForDogs, setIsForDogs] = useState(false);

    const handleSearchFormClose = () => {
        setSearchFormOpen(false);
    };

    const { data, loading } = useQuery(GET_BEACHES_QUERY, {
        onError(error) {
            console.log(error);
        },
    });

    console.log('DATA LOAD FROM SERVER', data);

    function Map() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 60.219014, lng: 24.857463 }}
                options={{
                    fullscreenControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                }}
            >
                {data &&
                    data.getBeaches &&
                    data.getBeaches.map((place) => (
                        <Marker
                            key={place.name}
                            position={{ lat: place.lat, lng: place.lon }}
                            onClick={() => {
                                console.log(place.name);
                                history.push(`/${place.name}`);
                                setIsBack(true);
                            }}
                            icon={{
                                url: '/markerRed.svg',
                                scaledSize: new window.google.maps.Size(35, 35),
                            }}
                        >
                            {/* <InfoWindow>
                                <p>{place.meta.name}</p>
                            </InfoWindow> */}
                        </Marker>
                    ))}
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div className={classes.homepage}>
            {/* <SearchBar /> */}
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            <Fab
                color="primary"
                size="large"
                className={classes.fab}
                onClick={() => setSearchFormOpen(true)}
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
            />
        </div>
    );
};

export default HomePage;
