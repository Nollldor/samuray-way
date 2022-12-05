import React from "react";
import {
    AddMessageActionCreator, dialogsPageType,
    UpdateMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {DispatchType, StateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: () => void
    UpdateMessageBody: (text: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))