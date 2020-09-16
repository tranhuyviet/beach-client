import React, { useContext } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
// import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { useStyles } from './HomePage.style';
// import PoolIcon from '@material-ui/icons/Pool';

import { DataContext } from '../../context/dataContext';
import { UIContext } from '../../context/uiContext';

import SearchBar from '../bars/SearchBar';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const classes = useStyles();
    const { data } = useContext(DataContext);
    const { setIsBack } = useContext(UIContext);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('https://iot.fvh.fi/opendata/uiras/uiras2_v1.json')
    //         .then((res) => {
    //             // console.log(res.data.sensors);
    //             //setData(res.data.sensors.meta);
    //             return res.data.sensors;
    //         })
    //         .then((data) => {
    //             setData(Object.values(data));
    //         })
    //         .catch((error) => console.log('ERROR LOADING DATA FROM SERVER', error));
    // }, []);

    function Map() {
        const history = useHistory();
        return (
            <GoogleMap defaultZoom={12} defaultCenter={{ lat: 60.1715, lng: 24.8983 }}>
                {data &&
                    data.map((place) => (
                        <Marker
                            key={place.meta.name}
                            position={{ lat: place.meta.lat, lng: place.meta.lon }}
                            onClick={() => {
                                console.log(place.meta.name);
                                history.push(`/${place.meta.name}`);
                                setIsBack(true);
                            }}
                            icon={{
                                url: '/marker.svg',
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
            <SearchBar />
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default HomePage;
