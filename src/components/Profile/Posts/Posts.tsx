import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {MyPost} from "./MyPost";

type PostType = {
    messageText: string
    likesNumber: number
}
type PostsDatatype = PostType[]

type PostsPropsType = {
    PostsData: PostsDatatype
    addPostCallback: (text: string) => void
}

export const Posts = (props: PostsPropsType) => {


    const PostsElements = props.PostsData.map((post, index) => <Post key={index} messageText={post.messageText}
                                                                     likesNumber={post.likesNumber}/>)

    return (
        <div className={s.profile}>
            <MyPost addPostCallback={props.addPostCallback}/>

            <div className={s.messages}>
                {PostsElements}
            </div>
        </div>

    );
}