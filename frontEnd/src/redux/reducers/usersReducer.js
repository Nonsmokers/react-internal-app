import {SET_USERS} from '../actions/actionTypes'
import {SET_USERS_SUCCESS} from '../actions/actionTypes'

let initialState = {
    isReady: false,
    items: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                items: action.payload,
                isReady: true
            }
        }
        case SET_USERS_SUCCESS: {
            return {
                ...state,
                isReady: action.payload
            }
        }
        default:
            return state;
    }
}

export default usersReducer;