import React from 'react';

export const EmployeeInfo = (props) => {
    return (
        <li className="profile__info_block">
            <h4>EMPLOYMENT INFO</h4>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857195.svg"
                        alt="position"/>
                    <p>Start of employment period</p>
                </div>
                <div>
                    <p>{props.currentProfile.period1}</p>
                </div>
            </div>
            <div className="profile__info_block-item">
                <div>
                    <img
                        src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857195.svg"
                        alt="position"/>
                    <p>Start of employment period 2</p>
                </div>
                <div>
                    <p>{props.currentProfile.period2}</p>
                </div>
            </div>
        </li>
    )
}