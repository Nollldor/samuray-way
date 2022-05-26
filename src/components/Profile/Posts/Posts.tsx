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
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>

    );
}