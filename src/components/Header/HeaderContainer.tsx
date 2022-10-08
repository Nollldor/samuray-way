import React, {useEffect} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMeThunk, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


type propsType = {
    isAuth: boolean,
    login: string
    setUserData: (id: number, email: string, login: string) => void
    authMeThunk: () => void
}

export const HeaderContainer = (props: propsType) => {
    useEffect(() => {
        props.authMeThunk()
    })
    return (
        <Header isAuth={props.isAuth} login={props.login}/>

    );
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainerConnect = connect(mapStateToProps, {setUserData, authMeThunk})(HeaderContainer)