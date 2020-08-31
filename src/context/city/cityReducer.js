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

export default (state, action) => {
    switch(action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: [action.payload, ...state.cities]
            }
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter((city) => city.City !== action.payload)
            }
        case SHORTLIST:
            return {
                ...state,
                shortlist: [...state.shortlist, action.payload]
            }
        case DELETE_SHORTLIST:
            return {
                ...state,
                shortlist: state.shortlist.filter((city) => city.City !== action.payload)
            }
        case FILTER_CITIES:
            return {
                ...state,
                filtered: state.cities.filter(city => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return city.City.match(regex) || city.District.match(regex) || city.State.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: []
            }
        // case UPDATE_CITY:
        //     return {
        //         ...state,
        //         cities: state.cities.map(city => 
        //             city.City === action.payload.City ? action.payload : city)
        //     }
        case GET_SUCCESS:
            return {
                ...state,
                cities: action.payload
            }
        case GET_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}