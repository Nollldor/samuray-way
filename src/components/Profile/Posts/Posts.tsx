import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={s.profile}>

            <div>
                My posts
                <div>
                    <textarea>New Post</textarea>
                    <button>Отправить</button>
                </div>
            </div>
            <div>
                <Post messageText={"It's my first message"} likesNumber={16}/>
                <Post messageText={"It's second message"} likesNumber={4}/>

            </div>
        </div>

    );
}