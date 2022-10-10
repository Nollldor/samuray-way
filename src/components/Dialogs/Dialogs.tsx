import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/dialogs-reducer";
import {Navigate} from 'react-router-dom'




type DialogsPropsType = {
    dialogsPage: dialogsPageType
    addMessage: () => void
    UpdateMessageBody: (text: string) => void
    isAuth: boolean
}


export const Dialogs = (props: DialogsPropsType) => {

    const DialogsElements = props.dialogsPage.dialogs.map(el => <Dialog key={el.id} title={el.name} id={el.id}/>)


    const MessagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)


    const addMessage = () => {
        if (props.dialogsPage.NewMessageBody.trim()) {
            props.addMessage()
        }
    }

    const UpdateMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.UpdateMessageBody(e.currentTarget.value)
    }

    if(!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div><textarea value={props.dialogsPage.NewMessageBody} onChange={UpdateMessageBody}
                               placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}