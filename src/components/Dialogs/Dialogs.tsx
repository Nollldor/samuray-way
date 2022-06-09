import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog";
import {Message} from "./Message";


type FriendType = {
    name: string
    id: number
}
type DialogsDatatype = FriendType[]

type MessageType = {
    message: string
    id: number
}
type MessagesDatatype = MessageType[]

export const Dialogs = () => {

    const DialogsData: DialogsDatatype = [
        {name: "Dima", id: 1},
        {name: "Valera", id: 2},
        {name: "Sasha", id: 3},
        {name: "Sveta", id: 4},
    ]

    const DialogsElements = DialogsData.map(el => <Dialog key={el.id} title={el.name} id={el.id}/>)

    const MessagesData: MessagesDatatype = [
        {message: "Yo", id: 1},
        {message: "hi!", id: 2},
        {message: "How are you&", id: 3},
    ]
    const MessagesElements = MessagesData.map(el => <Message key={el.id} message={el.message}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>

                {DialogsElements}

                {/*<Dialog title="Dima" id={1}/>
                <Dialog title="Valera" id={2}/>
                <Dialog title="Sasha" id={3}/>
                <Dialog title="Sveta" id={4}/>*/}
            </div>
            <div className={s.messages}>
                {/*<Message message="Yo"/>
                <Message message="hi!"/>
                <Message message="How are you&"/>*/}

                {MessagesElements}
            </div>
        </div>
    );
}