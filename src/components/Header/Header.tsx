import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: propsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"/>

            <div className={s.loginBlock}>
                {props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
}