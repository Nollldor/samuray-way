import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsDatatype, MessagesDatatype} from "../../redux/state";


type DialogsPropsType = {
    DialogsData: {
        messages: MessagesDatatype
        dialogs: DialogsDatatype
    }
}


export const Dialogs = (props: DialogsPropsType) => {



    const DialogsElements = props.DialogsData.dialogs.map(el => <Dialog key={el.id} title={el.name} id={el.id}/>)


    const MessagesElements = props.DialogsData.messages.map(el => <Message key={el.id} message={el.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div><textarea ref={newMessageElement}></textarea></div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    );
}