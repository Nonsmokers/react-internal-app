import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderInfo = (props) => {
    let currentUserName = localStorage.userLogin
    return (
        <>
            <div className="header__info-message">
                <img
                    src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857181.svg"
                    alt="messages"/>
            </div>
            <div className="header__info-profile">
                <img src="https://www.flaticon.com/svg/static/icons/svg/147/147142.svg" alt="photo"/>
                <a href="#">{currentUserName}</a>
            </div>
            <div className="header__info-exit">
                <NavLink to={`/accessDenied`}>
                    <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857183.svg"
                         alt="exit"
                         onClick={() => {props.logout()}}/>
                </NavLink>
            </div>
        </>
    )
}
export default HeaderInfo;