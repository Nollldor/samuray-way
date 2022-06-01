import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog+" "+s.active}>
                    <NavLink to="/dialogs/1" className={({isActive}) =>
                        isActive ? s.active : undefined
                    }>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" className={({isActive}) =>
                        isActive ? s.active : undefined
                    }>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" className={({isActive}) =>
                        isActive ? s.active : undefined
                    }>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" className={({isActive}) =>
                        isActive ? s.active : undefined
                    }>Sveta</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>hi!</div>
                <div className={s.message}>How are you&</div>
            </div>
        </div>
    );
}