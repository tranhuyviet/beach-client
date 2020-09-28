import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
const DataContext = createContext();

const initialState = {
    beaches: [],
    beach: null,
};

const beachReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BEACHES': {
            return {
                ...state,
                beaches: action.payload,
            };
        }
        case 'SET_BEACH': {
            return {
                ...state,
                beach: action.payload,
            };
        }
        default:
            return state;
    }
};

const DataProvider = (props) => {
    const [data, setData] = useState([]);
    const [state, dispatch] = useReducer(beachReducer, initialState);

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

    const setBeaches = (beaches) => {
        console.log('SET_BEACHES', beaches);
        dispatch({
            type: 'SET_BEACHES',
            payload: beaches,
        });
    };

    const setBeach = (beach) => {
        dispatch({
            type: 'SET_BEACH',
            payload: beach,
        });
    };

    return (
        <DataContext.Provider
            value={{
                data,
                beaches: state.beaches,
                setBeaches,
                beach: state.beach,
                setBeach,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
