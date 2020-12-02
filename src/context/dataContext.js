import React, { createContext, useReducer } from 'react';

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
        case 'SET_WEATHER_DATA': {
            return {
                ...state,
                weatherData: action.payload,
            };
        }

        default:
            return state;
    }
};

const DataProvider = (props) => {
    const [state, dispatch] = useReducer(beachReducer, initialState);

    const setBeaches = (beaches) => {
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
        dispatch({
            type: 'SET_DATA_DETAIL',
            payload: beach,
        });
    };

    const setWeatherData = (weatherData) => {
        dispatch({
            type: 'SET_WEATHER_DATA',
            payload: weatherData,
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
                weatherData: state.weatherData,
                setWeatherData,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
