import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutThunk} from "../../redux/auth-reducer";

type propsType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: propsType) => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutThunk())
    }
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"/>

            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={logout}>logout</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
}