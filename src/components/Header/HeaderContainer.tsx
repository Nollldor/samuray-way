import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


type propsType = {
    isAuth: boolean,
    login: string
}

export const HeaderContainer = (props: propsType) => {

    return (
        <Header isAuth={props.isAuth} login={props.login}/>
    );
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainerConnect = connect(mapStateToProps, {})(HeaderContainer)