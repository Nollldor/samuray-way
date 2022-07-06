import React from "react";
import {AddPostActionCreator, ChangeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StateType} from "../../../redux/redux-store";
import {MyPost} from "./MyPost";
import {StoreContext} from "../../../StoreContext";

export const MyPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState() as StateType
                    const addPost = () => {
                        store.dispatch(AddPostActionCreator())
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(ChangeNewPostTextActionCreator(text))
                    }

                    return <MyPost NewPostText={state.profilePage.NewPostText} addPost={addPost}
                                   onPostChange={onPostChange}/>
                }
            }
        </StoreContext.Consumer>
    )
}