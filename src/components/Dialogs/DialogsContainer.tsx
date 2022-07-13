import React from "react";
import {
    AddMessageActionCreator, dialogsPageType,
    UpdateMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {ActionsTypes, DispatchType, StateType, StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    UpdateMessageBody: (text: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(AddMessageActionCreator())
            dispatch(UpdateMessageBodyActionCreator(""))
        },
        UpdateMessageBody: (text: string) => {
            dispatch(UpdateMessageBodyActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)