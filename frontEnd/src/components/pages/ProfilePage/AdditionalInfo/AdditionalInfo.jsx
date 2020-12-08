import React from 'react';

export const AdditionalInfo = (props) => {
    return (
        <li className="profile__info_block">
            <h4>ADDITIONAL MODULES</h4>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857190.svg"
                        alt="position"/>
                    <p>Vacation</p>
                </div>
                <div>
                    <p>{props.currentProfile.vacation}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857191.svg"
                        alt="position"/>
                    <p>Address book redesign</p>
                </div>
                <div>
                    <p>{props.currentProfile.address_book}</p>
                </div>
            </div>
        </li>
    )
}