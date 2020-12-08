import React from 'react';

export const PrimaryInfo = (props) => {
    return (
        <div className="profile__header-main">
            <div className="profile__item_photo">
                <img src="https://www.flaticon.com/svg/static/icons/svg/147/147142.svg" alt="image"/>
                <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857187.svg"
                     alt="status"/>
            </div>
            <span className="profile__item_english-name"> - Mr - </span>
            <span className="profile__item_english-name">{props.currentProfile.nameInEnglish}</span>
            <span className="profile__item_russian-name">
                {props.currentProfile.nameInRussian} {props.currentProfile.patronymic}
            </span>
            <div className="profile__item_information">
                <div className="profile__item_information-position">
                    <p>{props.currentProfile.id}</p>
                </div>
                <div className="profile__item_information-room">
                    <p>{props.currentProfile.card}</p>
                </div>
            </div>
        </div>
    )
}