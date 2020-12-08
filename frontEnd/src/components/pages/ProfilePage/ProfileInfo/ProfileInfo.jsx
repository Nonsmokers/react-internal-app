import React from 'react';

export const ProfileInfo = (props) => {
    return (
        <li className="profile__info_block">
            <h4>PROFILE INFO</h4>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857180.svg"
                        alt="position"/>
                    <p>Hire date</p>
                </div>
                <div>
                    <p>{props.currentProfile.min_date}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857196.svg"
                        alt="position"/>
                    <p>Status</p>
                </div>
                <div>
                    <p>{props.currentProfile.is_active ? 'Active' : 'Non active'}</p>
                </div>
            </div>
        </li>
    )
}