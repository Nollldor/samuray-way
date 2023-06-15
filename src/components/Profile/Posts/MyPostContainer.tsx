import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import {ActionsTypes, DispatchType, StateType} from "../../../redux/redux-store";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";

type mapStateToPropsType = {
    NewPostText: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        NewPostText: 'state.profilePage.NewPostText'
    }
}

const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)