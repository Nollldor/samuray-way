import React from "react";
import s from "./Dialogs.module.css"

export const Dialogs = () => {

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog+" "+s.active}>Dima</div>
                <div className={s.dialog}>Valera</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Sveta</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>hi!</div>
                <div className={s.message}>How are you&</div>
            </div>
        </div>
    );
}