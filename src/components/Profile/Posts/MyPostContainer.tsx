import React, {ChangeEvent} from "react";

import {AddPostActionCreator, ChangeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, StateType, StoreType} from "../../../redux/redux-store";
import {MyPost} from "./MyPost";

type MyPostContainerPropsType = {
    store: StoreType
}


export const MyPostContainer = (props: MyPostContainerPropsType) => {

    const state = props.store.getState() as StateType
    const addPost = () => {
            props.store.dispatch(AddPostActionCreator())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(ChangeNewPostTextActionCreator(text))
    }

    return (
        <MyPost NewPostText={state.profilePage.NewPostText} addPost={addPost} onPostChange={onPostChange}/>
    )
}