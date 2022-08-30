import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {StateType} from "../../../redux/redux-store";
import {MyPostContainer} from "./MyPostContainer";
import {useStore} from "react-redux";

export const Posts = () => {
    const store = useStore()

    const state = store.getState() as StateType
    const PostsElements = state.profilePage.posts.map((post, index) => <Post key={index}
                                                                             messageText={post.messageText}
                                                                             likesNumber={post.likesNumber}/>)
    return (
        <div className={s.profile}>
            <MyPostContainer/>

            <div className={s.messages}>
                {PostsElements}
            </div>
        </div>
    )
}