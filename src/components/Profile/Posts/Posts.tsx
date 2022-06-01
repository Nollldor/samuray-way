import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {MyPost} from "./MyPost";


export const Posts = () => {
    return (
        <div className={s.profile}>
            <MyPost/>

            <div className={s.messages}>
                <Post messageText={"It's my first message"} likesNumber={16}/>
                <Post messageText={"It's second message"} likesNumber={4}/>

            </div>
        </div>

    );
}