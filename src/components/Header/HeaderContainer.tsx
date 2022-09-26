import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type propsType = {
    isAuth: boolean,
    login: string
    setUserData: (id: number, email: string, login: string) => void
}

export const HeaderContainer = (props: propsType) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    props.setUserData(id, email, login)
                }
            })
    })
    return (
        <Header isAuth={props.isAuth} login={props.login}/>

    );
}

const mapStateToProps = (state: StateType) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })

export const HeaderContainerConnect = connect(mapStateToProps, {setUserData})(HeaderContainer)