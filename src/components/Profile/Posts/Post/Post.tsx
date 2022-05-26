import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (

        <div className={s.item}>
            <img src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"/>
            <div>post 1</div>
            <button>like</button>
        </div>


    );
}