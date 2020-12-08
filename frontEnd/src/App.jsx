import React, {useEffect} from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {autoLogin} from "./redux/actions/auth";
import Header from "./components/header/Header";
import HomePageContainer from "./components/pages/HomePage/HomePageContainer";
import ProfilePageContainer from "./components/pages/ProfilePage/ProfilePageContainer";
import SettingsPageContainer from "./components/pages/SettingsPage/SettingsPage";
import SignUpPageContainer from "./components/pages/SignUpPage/SignUpPageContainer";
import SignInPageContainer from "./components/pages/SignInPage/SignInPageContainer";
import AccessDenied from "./components/common/AccessDenied/AccessDenied";

const App = (props) => {

    useEffect(() => {
        props.autoLogin()
    }, [])

    let routes = (
        <Switch>
            <Route exact path='/' render={() => <HomePageContainer/>}/>
            <Route path='/signIn' render={() => <SignInPageContainer/>}/>
            <Route path='/signUp' render={() => <SignUpPageContainer/>}/>
            <Route path='/accessDenied' render={() => <AccessDenied/>}/>
            <Redirect to={'/accessDenied'}/>
        </Switch>
    )
    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path='/profile/:id?' render={(props) => <ProfilePageContainer {...props}/>}/>
                <Route path='/settings' render={() => <SettingsPageContainer/>}/>
                <Route exact path='/' render={() => <HomePageContainer/>}/>
                <Redirect to={'/'}/>
            </Switch>
        )
    }

    return (
        <>
            <Header/>
            <section className="content-wrapper">
                <div className="content">
                    {routes}
                </div>
            </section>
        </>
    );
}

const selectIsAuthenticated = state => state.authReducer.token

const mapStateToProps = (state) => ({
    isAuthenticated: !!selectIsAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
    autoLogin: () => dispatch(autoLogin())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))