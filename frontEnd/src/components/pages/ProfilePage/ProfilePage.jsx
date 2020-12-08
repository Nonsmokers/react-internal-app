import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralInfo} from "./GeneralInfo/GeneralInfo";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {EmployeeInfo} from "./EmployeeInfo/EmployeeInfo";
import {AdditionalInfo} from "./AdditionalInfo/AdditionalInfo";
import {PrimaryInfo} from "./PrimaryInfo/PrimaryInfo";
import {BackButton} from "../../common/BackButton/BackButton";
import './ProfilePage.scss';

const ProfilePage = (props) => {
    return (
        <div className="profile">
            <div>
                <div className="profile__header">
                    <BackButton/>
                    <PrimaryInfo currentProfile={props.currentProfile}/>
                </div>
            </div>
            {localStorage.getItem('userRole') === 'admin' ?
                <div className="edit_button" onClick={()=>console.log('I work')}>
                    <p>EDIT DETAILS</p>
                </div> : ''}
            <ul className="profile__info">
                <GeneralInfo currentProfile={props.currentProfile}/>
                <ContactInfo currentProfile={props.currentProfile}/>
                <ProfileInfo currentProfile={props.currentProfile}/>
                <EmployeeInfo currentProfile={props.currentProfile}/>
                <AdditionalInfo currentProfile={props.currentProfile}/>
            </ul>
        </div>
    )
}
export default ProfilePage;







