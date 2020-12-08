import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setUsers} from "../../../../../redux/actions/users";
import EmployeeListHeader from "./EmployeeListHeader";
import {AJAXRequests, requestURL} from "../../../../../api/api";

const EmployeeListHeaderContainer = (props) => {

    const [sorting, setSorting] = useState({count: 0, name: ''});

    function sortBy(e) {
        let currentName = e.target.closest('div').id
        if (currentName !== sorting.name || sorting.count >= 2) {
            setSorting({count: 0, name: currentName});
        } else {
            setSorting({count: sorting.count + 1, name: currentName});
        }
    }

    useEffect(() => {
        switch (sorting.name) {
            case "name":
                return AJAXRequests.getSortedEmployeesByName('GET', requestURL, sorting.count)
                    .then(data => {
                        props.setUsers(JSON.parse(data))
                    })
            case "department":
                return AJAXRequests.getSortedEmployeesByPosition('GET', requestURL, sorting.count)
                    .then(data => {
                        props.setUsers(JSON.parse(data))
                    })
            case "room":
                return AJAXRequests.getSortedEmployeesByRoom('GET', requestURL, sorting.count)
                    .then(data => {
                        props.setUsers(JSON.parse(data))
                    })
        }
    }, [sorting])

    return (
        <EmployeeListHeader sortBy={sortBy}/>
    )
}


const selectUsers = state => state.usersReducer.items

const mapStateToProps = (state) => ({
    users: selectUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
    setUsers: users => dispatch(setUsers(users))
});
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListHeaderContainer)