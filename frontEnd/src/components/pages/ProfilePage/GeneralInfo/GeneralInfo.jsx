import React from 'react';

export const GeneralInfo = (props) => {
    return (
        <li className="profile__info_block">
            <h4>GENERAL INFO</h4>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857193.svg"
                        alt="position"/>
                    <p>Department</p>
                </div>
                <div>
                    <p>{props.currentProfile.id}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857178.svg"
                        alt="position"/>
                    <p>Room</p>
                </div>
                <div>
                    <p>{props.currentProfile.room}</p>
                </div>
            </div>
        </li>
    )
}