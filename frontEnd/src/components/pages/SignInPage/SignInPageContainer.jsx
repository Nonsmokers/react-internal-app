import React, {useState} from 'react';
import SignInPage from "./SignInPage.jsx";
import {connect} from "react-redux";
import {auth} from "../../../redux/actions/auth";

const SignInPageContainer = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
        props.auth(
            true,
            login,
            password,
        )
    };

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <SignInPage handleSubmit={loginHandler}
                    handleLoginChange={handleLoginChange}
                    handlePasswordChange={handlePasswordChange}/>
    )
}
const mapDispatchToProps = dispatch => ({
    auth: (isLogin, login, password) => dispatch(auth(isLogin, login, password))
});

export default connect(null, mapDispatchToProps)(SignInPageContainer);