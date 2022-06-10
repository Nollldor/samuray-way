import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType = {
    title: string
    id: number
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id} className={({isActive}) =>
                isActive ? s.active : undefined
            }>{props.title}</NavLink>
        </div>
    )
}