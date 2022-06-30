import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {MyPost} from "./MyPost";
import {ActionsTypes} from "../../../redux/state";

type PostType = {
    messageText: string
    likesNumber: number
}
type PostsDatatype = PostType[]

type PostsPropsType = {
    PostsData: {
        posts: PostsDatatype
        NewPostText: string
    }
    dispatch: (action: ActionsTypes) => void
}

export const Posts = (props: PostsPropsType) => {


    const PostsElements = props.PostsData.posts.map((post, index) => <Post key={index} messageText={post.messageText}
                                                                     likesNumber={post.likesNumber}/>)

    return (
        <div className={s.profile}>
            <MyPost dispatch={props.dispatch.bind(props.PostsData)} NewPostText={props.PostsData.NewPostText}/>

            <div className={s.messages}>
                {PostsElements}
            </div>
        </div>

    );
}