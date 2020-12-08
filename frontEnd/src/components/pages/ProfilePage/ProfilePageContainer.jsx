import React, {useEffect, useState} from 'react';
import {AJAXRequests, requestURL} from "../../../api/api";
import ProfilePage from "./ProfilePage";

const ProfilePageContainer = (props) => {

    const [currentProfile, setCurrentProfile] = useState({});

    useEffect(() => {
        let queryParams = Object.values(props.match.params)
        let userId = (queryParams[0])

        AJAXRequests.getUserById('GET', requestURL, userId)
            .then(data => {
                setCurrentProfile(...JSON.parse(data))
            })
    }, []);

    return (
        <ProfilePage currentProfile={currentProfile}/>
    )
}

export default ProfilePageContainer;