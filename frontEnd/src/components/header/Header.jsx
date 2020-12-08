import React from 'react';
import HeaderInfo from "./HeaderInfo";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/actions/auth";
import  "./Header.scss";

const Header = (props) => {
    const currentUserRole = localStorage.userRole
    return (
        <header>
            <section className="header__wrapper">
                <header className="header">

                    <div className="header__logo">
                        <NavLink to={`/`}>
                            <h1 className="header__logo-name">EL' BURRITO GROUP</h1>
                            <h1 className="header__logo-service">EMPLOYEE SERVICES</h1>
                        </NavLink>

                    </div>
                    <nav className="header__menu">
                        <ul id="menu">
                            <li className="menu__link menu__link-active"><a href="#">Address book</a></li>
                            <li className="menu__link"><a href="#">Leave Requests</a></li>
                            {props.isAuthenticated && currentUserRole === 'admin' ?
                                <li className="menu__link">
                                    <NavLink to={`/settings/`}>Settings</NavLink>
                                </li> : ''}
                        </ul>
                    </nav>
                    <div className="header__info">
                        {props.isAuthenticated ?
                            <HeaderInfo logout={props.logout}/> :
                            <>
                                <NavLink to={'/signUp'}>
                                    <button id="registration">Registration</button>
                                </NavLink>
                                <NavLink to={'/signIn'}>
                                    <button id="auth">Login</button>
                                </NavLink>
                            </>
                        }
                    </div>
                </header>
            </section>
        </header>
    )
}

const selectIsAuthenticated = state => state.authReducer.token

const mapStateToProps = (state) => ({
    isAuthenticated: !!selectIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
