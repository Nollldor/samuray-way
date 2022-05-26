import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    messageText: string
    likesNumber: number
}

export const Post = (props: PostPropsType) => {
    return (

        <div className={s.item}>
            <img src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"/>
            <div>{props.messageText}</div>
            <span> {props.likesNumber} </span>
            <button>like</button>
        </div>


    );
}