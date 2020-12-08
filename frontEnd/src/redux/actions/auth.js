import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";
import {AJAXRequests, requestURL} from "../../api/api";

export const auth = (isLogin, login, password, role) => {
    return async dispatch => {
        const authData = {
            isLogin,
            login,
            password,
            role
        };
        let authUser = JSON.stringify(authData)

        let request;
        if (isLogin) {
            request = AJAXRequests.login('POST', requestURL, authUser)
        } else {
            request = AJAXRequests.register('POST', requestURL, authUser)
        }

        request.then(response => {
            if (response.status >= 400) {
                alert('Wrong email or password')
            }

            const data = JSON.parse(response)
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

            localStorage.setItem('token', data.token);
            localStorage.setItem('userLogin', data.login);
            localStorage.setItem('userRole', data.role);
            localStorage.setItem('expirationDate', expirationDate);

            dispatch(authSuccess(data.token))
            dispatch(autoLogout(expirationDate - new Date().getTime()))
        })
    }
}

export const autoLogout = (time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time)
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
    localStorage.removeItem('userRole');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    }
}

export const autoLogin = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogout(expirationDate.getTime() - new Date().getTime()))
            }
        }
    }
}

export const authSuccess = (token) => {
    return {
        type: AUTH_SUCCESS,
        token
    }
}