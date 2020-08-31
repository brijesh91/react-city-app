import React, { useReducer } from 'react';
import axios from 'axios';
import CityContext from './cityContext';
import cityReducer from './cityReducer';
import {
    ADD_CITY,
    DELETE_CITY,
    SHORTLIST,
    DELETE_SHORTLIST,
    UPDATE_CITY,
    FILTER_CITIES,
    CLEAR_FILTER,
    GET_SUCCESS,
    GET_FAILURE
} from '../types'

const CityState = props => {
    const initialState = {
        cities: [],
        shortlist: [],
        filtered: [],
        error: null
    }

    const [state, dispatch] = useReducer(cityReducer, initialState)

    // Get City
    const getData = async () => {
        try {
            const res = await axios.get('https://next.json-generator.com/api/json/get/EJX4SGwfK')
            console.log('this is resposne', res)
            dispatch({
                type: GET_SUCCESS,
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: GET_FAILURE,
                payload: 'Error while fetching results'
            })
        }
    }

    // Add city
    const addCity = city => {
        console.log(city)
        if(city.City === '' 
            || city.District === ''
            || city.State === ''
            ){
            return alert(`Please provide input`)
        }
        dispatch({ type: ADD_CITY, payload: city})
    }

    // Del city
    const deleteCity = City => {
        dispatch({ type:DELETE_CITY, payload: City })
    }

    // Shortlist city
    const shortList = city => {
        dispatch({ type: SHORTLIST, payload: city})
    }

    // Remove shortlist
    const deleteShortList = City => {
        dispatch({ type: DELETE_SHORTLIST, payload: City})
    }

    // Update city
    // const updateCity = city => {
    //     dispatch({ type: UPDATE_CITY, payload: city})
    // }

    // Filter city
    const filterCities = text => {
        dispatch({ type: FILTER_CITIES, payload: text })
    }

    // Clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER})
    }
    return (
        <CityContext.Provider
            value={{
                cities: state.cities,
                shortlist: state.shortlist,
                filtered: state.filtered,
                addCity,
                deleteCity,
                shortList,
                deleteShortList,
                filterCities,
                clearFilter,
                getData
                // updateCity
            }}>
            {props.children}
        </CityContext.Provider>
    )

};

export default CityState