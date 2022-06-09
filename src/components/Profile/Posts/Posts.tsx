import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {MyPost} from "./MyPost";

type PostType = {
    messageText: string
    likesNumber: number
}
type PostsDatatype = PostType[]
export const Posts = () => {

    const PostsData: PostsDatatype = [
        {messageText: "It's my first message", likesNumber: 16},
        {messageText: "It's second message!", likesNumber: 4},

    ]

    const PostsElements = PostsData.map((post,index)=> <Post key={index} messageText={post.messageText} likesNumber={post.likesNumber}/>)
    return (
        <div className={s.profile}>
            <MyPost/>

            <div className={s.messages}>
                { PostsElements }
            </div>
        </div>

    );
}