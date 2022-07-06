import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    AddMessageActionCreator,
    UpdateMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {StateType, StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}


export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const state = props.store.getState() as StateType

    const UpdateMessageBody = (text: string) => {
        props.store.dispatch(UpdateMessageBodyActionCreator(text))
    }

    const addMessage = () => {
        props.store.dispatch(AddMessageActionCreator())
        UpdateMessageBody("")
    }

    return (
        <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} UpdateMessageBody={UpdateMessageBody}/>
    );
}