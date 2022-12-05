import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {Dialogs} from "../components/Dialogs/Dialogs";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";


type MSTPType = {
    isAuth: boolean
}

const MSTP = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MSTPType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T} />
    }

    const ConnectRedirectComponent = connect(MSTP)(RedirectComponent)

    return ConnectRedirectComponent
}