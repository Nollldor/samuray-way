import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    AddMessageActionCreator,
    DialogsDatatype,
    MessagesDatatype,
    UpdateMessageBodyActionCreator
} from "../../redux/state";


type DialogsPropsType = {
    DialogsData: {
        messages: MessagesDatatype
        NewMessageBody: string,
        dialogs: DialogsDatatype
    }
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs = (props: DialogsPropsType) => {


    const DialogsElements = props.DialogsData.dialogs.map(el => <Dialog key={el.id} title={el.name} id={el.id}/>)


    const MessagesElements = props.DialogsData.messages.map(el => <Message key={el.id} message={el.message}/>)


    const addMessage = () => {
        if (props.DialogsData.NewMessageBody.trim()) {
            props.dispatch(AddMessageActionCreator())
        }
    }

    const UpdateMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateMessageBodyActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div><textarea value={props.DialogsData.NewMessageBody} onChange={UpdateMessageBody}
                               placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}