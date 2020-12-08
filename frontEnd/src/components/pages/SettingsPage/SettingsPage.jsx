import React, {useEffect, useState} from 'react';
import SettingsPageItem from "./SettingsPageItem";
import {AJAXRequests, requestURL} from "../../../api/api";
import SettingsHeader from "./SettingsHeader/SettingsHeader";
import "./SettingsPage.scss";

const SettingsPageContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        AJAXRequests.getUsers('GET', requestURL)
            .then(data => {
                setUsers(JSON.parse(data))
            })
    }, []);

    const getChangedRole = (currentId) => {

        console.log(currentId)
        let data = {
            id: currentId
        }
        let currentUser = JSON.stringify(data)
        AJAXRequests.changeRole('POST', requestURL, currentUser)
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="settings">
            <SettingsHeader/>
            {users.map((card) => (
                <SettingsPageItem key={card.id} card={card} getChangedRole={getChangedRole}/>
            ))}
        </div>
    )

}

export default SettingsPageContainer;