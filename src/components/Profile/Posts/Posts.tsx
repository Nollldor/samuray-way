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
    PostsData: {
        posts: PostsDatatype
        NewPostText: string
    }
    addPostCallback: () => void
    ChangeNewPostText: (text:string) => void
}

export const Posts = (props: PostsPropsType) => {


    const PostsElements = props.PostsData.posts.map((post, index) => <Post key={index} messageText={post.messageText}
                                                                     likesNumber={post.likesNumber}/>)

    return (
        <div className={s.profile}>
            <MyPost addPostCallback={props.addPostCallback} NewPostText={props.PostsData.NewPostText} ChangeNewPostText={props.ChangeNewPostText}/>

            <div className={s.messages}>
                {PostsElements}
            </div>
        </div>

    );
}