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

// import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const HomePage = () => {
    const classes = useStyles();
    const { data } = useContext(DataContext);
    const { setIsBack } = useContext(UIContext);
    const history = useHistory();
    const [searchFormOpen, setSearchFormOpen] = useState(false);

    // FILTER
    const [isHelsinkiSelected, setIsHelsinkiSelected] = useState(false);
    const [isEspooSelected, setIsEspooSelected] = useState(false);
    const [isVantaaSelected, setIsVantaaSelected] = useState(false);

    const handleSearchFormClose = () => {
        setSearchFormOpen(false);
    };

    function Map() {
        let filtered = [];
        data.forEach((place) => {
            if (isEspooSelected) {
                if (place.meta.name === 'Hanikan uimaranta (Espoo)') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Kattilajärvi (Espoo)') {
                    filtered.push(place);
                }
            }
            if (isVantaaSelected) {
                if (place.meta.name === 'Vetokannas (Vantaa)') {
                    filtered.push(place);
                }
            }
            if (isHelsinkiSelected) {
                if (place.meta.name === 'Uunisaari') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Pikkukosken uimaranta') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Lauttasaari (Vaskiniemi)') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Rastilan uimaranta') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Sompasauna') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Pihlajasaari') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Vasikkasaari') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Marjaniemen uimaranta') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Hietaniemi (Ourit)') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Herttoniemi (Tuorinniemen uimalaituri)') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Vartiosaari (Reposalmen laituri)') {
                    filtered.push(place);
                }
                if (place.meta.name === 'Eiranranta (Löyly)') {
                    filtered.push(place);
                }
            } else if (!isVantaaSelected && !isEspooSelected && !isHelsinkiSelected) {
                filtered.push(place);
            }
        });

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
                {filtered &&
                    filtered.map((place) => (
                        <Marker
                            key={place.meta.name}
                            position={{ lat: place.meta.lat, lng: place.meta.lon }}
                            onClick={() => {
                                console.log(place.meta.name);
                                history.push(`/${place.meta.name}`);
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

    console.log('DATA STATE', data);

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
            />
        </div>
    );
};

export default HomePage;
