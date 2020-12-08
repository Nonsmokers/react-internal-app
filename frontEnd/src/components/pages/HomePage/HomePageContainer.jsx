import React, {useState, useEffect, useCallback} from 'react';
import {AJAXRequests, requestURL} from "../../../api/api";
import {connect} from "react-redux";
import {setUsers} from "../../../redux/actions/users";
import HomePage from "./HomePage";

const HomePageContainer = (props) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const {setUsers} = props
        AJAXRequests.getEmployees('GET', requestURL)
            .then(data => {
                setUsers(JSON.parse(data))
            })
    }, []);

    useEffect(() => {
        onSearch(search)
    }, [search]);

    const debounce = (fn, ms) => {
        let timeout;
        return function () {
            const later = () => {
                fn.apply(this, arguments)
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, ms);
        };
    }

    const onSearch = useCallback(
        debounce((text) => {
            AJAXRequests.getFilteredEmployees('GET', requestURL, text)
                .then(data => {
                    props.setUsers(JSON.parse(data))
                })
        }, 1500),
        []
    );

    const onSearchRequest = () => {
        AJAXRequests.getFilteredEmployees('GET', requestURL, search)
            .then(data => {
                props.setUsers(JSON.parse(data))
            })
    };

    return (
        <HomePage search={search}
                  setSearch={setSearch}
                  onSearchRequest={onSearchRequest}
                  users={props.users}
                  isReady={props.isReady}
        />
    )
};

const selectUsers = state => state.usersReducer.items
const selectIsReady = state => state.usersReducer.isReady

const mapStateToProps = (state) => ({
    users: selectUsers(state),
    isReady: selectIsReady(state)
});

const mapDispatchToProps = (dispatch) => ({
    setUsers: users => dispatch(setUsers(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);