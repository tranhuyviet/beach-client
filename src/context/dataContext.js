import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const DataContext = createContext();

const DataProvider = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://iot.fvh.fi/opendata/uiras/uiras2_v1.json')
            .then((res) => {
                // console.log(res.data.sensors);
                //setData(res.data.sensors.meta);
                return res.data.sensors;
            })
            .then((data) => {
                setData(Object.values(data));
            })
            .catch((error) => console.log('ERROR LOADING DATA FROM SERVER', error));
    }, []);

    return (
        <DataContext.Provider
            value={{
                data,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
