import React, {ChangeEvent} from "react";

import {AddPostActionCreator, ChangeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes} from "../../../redux/redux-store";

type MyPostPropsType = {
    NewPostText: string
    addPost: () => void
    onPostChange: (text:string) => void
}


export const MyPost = (props: MyPostPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.NewPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Отправить</button>
                </div>
            </div>
        </div>
    )
}