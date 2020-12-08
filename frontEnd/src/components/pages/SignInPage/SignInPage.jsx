import React from 'react';
import './Auth.scss';

const SignInPage = (props) => {
    return (
        <div className="limiter">
            <div className="container__login">
                <div className="wrap__login ">
                    <form className="login__form" onSubmit={props.handleSubmit} name="myForm" id="myForm">
					<span className="login__form-title">
						Welcome
					</span>
                        <div className="wrap__input" data-validate="Enter username">
                            <input className="input" value={props.login} onChange={props.handleLoginChange}
                                   type="text" name="login"
                                   placeholder="Login" id="signup-email"/>
                            <span className="focus__input"/>
                        </div>
                        <div className="wrap__input " data-validate="Enter password">
                            <input className="input" value={props.password} type="password"
                                   name="password" placeholder="Password" onChange={props.handlePasswordChange}
                                   id="signup-password"/>
                            <span className="focus__input"/>
                        </div>
                        <div className="container__login_form-btn">
                            <button className="login__form-btn" id="signup-submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}

export default SignInPage;