import React from "react";
import {AddPostActionCreator, ChangeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, DispatchType, StateType} from "../../../redux/redux-store";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";

type mapStateToPropsType = {
    NewPostText: string
}

type mapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        NewPostText: state.profilePage.NewPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
        onPostChange: (text: string) => {
            dispatch(ChangeNewPostTextActionCreator(text))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)