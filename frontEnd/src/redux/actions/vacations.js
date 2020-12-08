import {FETCH_VACATIONS, SET_AVAILABLE_DAYS_ERROR, SET_AVAILABLE_DAYS_SUCCESS, SET_VACATIONS} from "./actionTypes";
import {AJAXRequests, requestURL} from "../../api/api";

export const prepareVacation = vacations => {
    return async (dispatch, getState) => {
        const {availableDays, vacationsDays} = getState().vacationsReducer

        switch (vacations.type) {
            case 'vacation':
                if (availableDays < vacations.total_days || vacationsDays < vacations.total_days) {
                    dispatch(setAvailableDaysError)
                } else {
                    const response = await AJAXRequests.setVacation('POST', requestURL, JSON.stringify(vacations))
                    dispatch(setAvailableDaysSuccess(availableDays, vacationsDays, vacations.total_days))
                    dispatch(setVacations(JSON.parse(response)))
                }
                break
            case 'sick_leave':
                const response = await AJAXRequests.setVacation('POST', requestURL, JSON.stringify(vacations))
                dispatch(setVacations(JSON.parse(response)))
                break
            case 'own_expense':
                if (availableDays < vacations.total_days) {
                    dispatch(setAvailableDaysError)
                } else {
                    const response = await AJAXRequests.setVacation('POST', requestURL, JSON.stringify(vacations))
                    dispatch(setAvailableDaysSuccess(availableDays, vacations.total_days))
                    dispatch(setVacations(JSON.parse(response)))
                }
                break
        }
    }
}

export const fetchVacations = vacations => ({
    type: FETCH_VACATIONS,
    payload: vacations
})
export const setVacations = vacations => ({
    type: SET_VACATIONS,
    payload: vacations
})
export const setAvailableDaysError = () => ({
    type: SET_AVAILABLE_DAYS_ERROR,
    error: 'Недостаточно дней'
})
export const setAvailableDaysSuccess = (availableDays, vacationsDays, days) => ({
    type: SET_AVAILABLE_DAYS_SUCCESS,
    availableDays: availableDays - days,
    vacationsDays: vacationsDays - days
})
