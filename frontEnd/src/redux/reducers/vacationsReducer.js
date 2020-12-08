import {SET_AVAILABLE_DAYS_ERROR, SET_AVAILABLE_DAYS_SUCCESS, SET_VACATIONS} from '../actions/actionTypes'
import {FETCH_VACATIONS} from '../actions/actionTypes'
import {SET_VACATIONS_SUCCESS} from '../actions/actionTypes'

let initialState = {
    isReady: false,
    items: [],
    availableDays: 147,
    vacationsDays: 28
}

const vacationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VACATIONS: {
            return {
                ...state,
                items: action.payload,
                isReady: true
            }
        }
        case SET_VACATIONS: {
            return {
                ...state,
                items: [...state.items, action.payload],
                isReady: true
            }
        }
        case SET_VACATIONS_SUCCESS: {
            return {
                ...state,
                isReady: action.payload
            }
        }
        case SET_AVAILABLE_DAYS_SUCCESS: {
            return {
                ...state,
                availableDays: action.availableDays,
                vacationsDays: action.vacationsDays,
            }
        }
        case SET_AVAILABLE_DAYS_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default vacationsReducer;