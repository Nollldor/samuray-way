import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {MyPostContainer} from "./MyPostContainer";
import {useSelector, useStore} from "react-redux";
import {PostType} from "../../../redux/profile-reducer";
import {StateType} from "../../../redux/redux-store";

export const Posts = () => {
    const posts = useSelector<StateType,PostType[]>(state => state.profilePage.posts)
    const PostsElements = posts.map((post, index) => <Post key={index}
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