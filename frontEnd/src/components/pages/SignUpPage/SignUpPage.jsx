import React from 'react';
import './../SignInPage/Auth.scss';

const SignUpPage = (props) => {
    return (
        <div className="limiter">
            <div className="container__login">
                <div className="wrap__login ">
                    <form className="login__form" id="formElem" onSubmit={props.handleSubmit}>
					<span className="login__form-title">
						Welcome
					</span>
                        <div className="wrap__input" data-validate="Enter username">
                            <input className="input" type="text" name="login"
                                   placeholder="Login" value={props.login} onChange={props.handleLoginChange}/>
                            <span className="focus__input"/>
                        </div>
                        <div className="wrap__input " data-validate="Enter password">
                            <input className="input" type="password" name="password" placeholder="Password"
                                   value={props.password} onChange={props.handlePasswordChange}/>
                            <span className="focus__input"/>
                        </div>
                        <div className="radio__wrapper">
                            <div className="radio__item" onChange={props.handleRoleChange}>
                                <input className="custom__radio" type="radio" id="color-1" name="role" value="user"/>
                                <label htmlFor="color-1">User</label>
                            </div>
                            <div className="radio" onChange={props.handleRoleChange}>
                                <input className="custom__radio" type="radio" id="color-2" name="role" value="editor"/>
                                <label htmlFor="color-2">Editor</label>
                            </div>
                        </div>
                        <div className="container__login_form-btn">
                            <button className="login__form-btn" id="signup-submit">
                                Sign Up
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUpPage