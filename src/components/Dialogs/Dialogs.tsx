import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog";
import {Message} from "./Message";

export const Dialogs = () => {

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <Dialog title="Dima" id={1}/>
                <Dialog title="Valera" id={2}/>
                <Dialog title="Sasha" id={3}/>
                <Dialog title="Sveta" id={4}/>
            </div>
            <div className={s.messages}>
                <Message message="Yo"/>
                <Message message="hi!"/>
                <Message message="How are you&"/>
            </div>
        </div>
    );
}