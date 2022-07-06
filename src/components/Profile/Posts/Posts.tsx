import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {StateType, StoreType} from "../../../redux/redux-store";
import {MyPostContainer} from "./MyPostContainer";


type PostsPropsType = {
    store: StoreType
}

export const Posts = (props: PostsPropsType) => {
    const state = props.store.getState() as StateType
    const PostsElements = state.profilePage.posts.map((post, index) => <Post key={index} messageText={post.messageText}
                                                                     likesNumber={post.likesNumber}/>)

    return (
        <div className={s.profile}>
            <MyPostContainer store={props.store} />

            <div className={s.messages}>
                {PostsElements}
            </div>
        </div>

    );
}