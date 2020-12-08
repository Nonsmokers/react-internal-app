import React, {useState} from 'react';
import SignUpPage from "./SignUpPage.jsx";
import {auth} from "../../../redux/actions/auth";
import {connect} from "react-redux";

const SignUpPageContainer = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.auth(
            false,
            login,
            password,
            role
        )
    };

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleRoleChange = (event) => {
        setRole(event.target.value)
    }
    return (
        <SignUpPage handleLoginChange={handleLoginChange}
                    handlePasswordChange={handlePasswordChange}
                    handleRoleChange={handleRoleChange}
                    handleSubmit={handleSubmit}/>
    )
}
const mapDispatchToProps = dispatch => ({
    auth: (isLogin, login, password, role) => dispatch(auth(isLogin, login, password, role))
});

export default connect(null, mapDispatchToProps)(SignUpPageContainer);