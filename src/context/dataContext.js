import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
const DataContext = createContext();

const initialState = {
    beaches: [],
    beach: null,
    dataDetail: {},
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
        case 'SET_DATA_DETAIL': {
            return {
                ...state,
                dataDetail: action.payload,
            };
        }

        default:
            return state;
    }
};

const DataProvider = (props) => {
    const [state, dispatch] = useReducer(beachReducer, initialState);

    // const [dataAPI, setDataAPI] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get('https://iot.fvh.fi/opendata/uiras/uiras2_v1.json')
    //         .then((res) => {
    //             return res.data.sensors;
    //         })
    //         .then((data) => {
    //             setDataAPI(Object.values(data));
    //         })
    //         .catch((error) => console.log('ERROR LOADING DATA FROM SERVER', error));
    // }, []);

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

    const setDataDetail = (beach) => {
        console.log(beach);
        dispatch({
            type: 'SET_DATA_DETAIL',
            payload: beach,
        });
    };

    return (
        <DataContext.Provider
            value={{
                // dataAPI,
                beaches: state.beaches,
                setBeaches,
                beach: state.beach,
                setBeach,
                dataDetail: state.dataDetail,
                setDataDetail,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
