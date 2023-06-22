import React, {useEffect} from 'react';
import s from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../redux/auth-reducer";
import {StateType} from "redux/redux-store";

type propsType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: propsType) => {
    const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }

    }, [isAuth, navigate]);

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