import React from 'react';

export const ContactInfo = (props) => {
    return (
        <li className="profile__info_block">
            <h4>CONTACT</h4>
            <div className="profile__info_block-item">
                <div>
                    <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857182.svg"
                         alt="position"/>
                    <p>Internal phone</p>
                </div>
                <div>
                    <p>{props.currentProfile.extraPhone}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857184.svg"
                         alt="position"/>
                    <p>Mobile phone</p>
                </div>
                <div>
                    <p>{props.currentProfile.phone}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857191.svg"
                         alt="position"/>
                    <p>Email</p>
                </div>
                <div>
                    <p>${props.currentProfile.email}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857186.svg"
                         alt="position"/>
                    <p>Skype</p>
                </div>
                <div>
                    <p>{props.currentProfile.skype}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857194.svg"
                         alt="position"/>
                    <p>C-Number</p>
                </div>
                <div>
                    <p>{props.currentProfile.c_number}</p>
                </div>
            </div>
        </li>
    )
}