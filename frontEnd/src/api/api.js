export const requestURL = 'http://localhost:3001/';
export const instance = (method, url, value) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.type = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('Something wait wrong')
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(value);
    })
}

export const AJAXRequests = {
    getEmployees: function getEmployees(method, url) {
        let queryUrl = `${url}data`;
        return instance(method, queryUrl)
    },
    getUsers: function getUsers(method, url) {
        let queryUrl = `${url}settings`;
        return instance(method, queryUrl)
    },
    getFilteredEmployees: function getFilteredEmployees(method, url, value) {
        let queryUrl = `${url}filtered-data?value=${value}`;
        return instance(method, queryUrl, value)
    },
    getUserById: function getUserById(method, url, value) {
        let queryUrl = `${url}filtered-id?value=${value}`;
        return instance(method, queryUrl, value)
    },
    login: function signIn(method, url, value) {
        let queryUrl = `${url}login`;
        return instance(method, queryUrl, value)
    },
    register: function signUp(method, url, value) {
        let queryUrl = `${url}register`
        return instance(method, queryUrl, value)
    },
    changeRole: function changeRole(method, url, value) {
        let queryUrl = `${url}change-role`
        return instance(method, queryUrl, value)
    },
    setVacation: function setVacation(method, url, value) {
        let queryUrl = `${url}create-vacation`
        return instance(method, queryUrl, value)
    },
    getSortedEmployeesByName: function getSortedEmployeesByName(method, url, value) {
        let queryUrl = `${url}sorted-name?value=${value}`;
        return instance(method, queryUrl, value)
    },
    getSortedEmployeesByPosition: function getSortedEmployeesByPosition(method, url, value) {
        let queryUrl = `${url}sorted-position?value=${value}`;
        return instance(method, queryUrl, value)
    },
    getSortedEmployeesByRoom: function getSortedEmployeesByRoom(method, url, value) {
        let queryUrl = `${url}sorted-room?value=${value}`;
        return instance(method, queryUrl, value)
    },
}

