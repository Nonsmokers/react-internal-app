import React from 'react';
import {NavLink} from "react-router-dom";

export const BackButton = () => {
    return (
        <NavLink to={`/`}>
            <div className="profile__header-button">
                <img
                    src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857192.svg"
                    id="back_from_profile" alt=""/>
            </div>
        </NavLink>)
}