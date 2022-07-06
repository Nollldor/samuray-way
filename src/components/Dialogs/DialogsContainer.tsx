import React from "react";
import {
    AddMessageActionCreator,
    UpdateMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {StateType, StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
                (store) =>{
                    const state = store.getState() as StateType

                    const UpdateMessageBody = (text: string) => {
                        store.dispatch(UpdateMessageBodyActionCreator(text))
                    }

                    const addMessage = () => {
                        store.dispatch(AddMessageActionCreator())
                        UpdateMessageBody("")
                    }

                    return <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} UpdateMessageBody={UpdateMessageBody}/>
                }

            }
        </StoreContext.Consumer>
    );
}