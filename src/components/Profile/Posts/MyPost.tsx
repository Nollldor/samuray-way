import React, {ChangeEvent} from "react";
import {ActionsTypes, AddPostActionCreator, ChangeNewPostTextActionCreator} from "../../../redux/state";

type MyPostPropsType = {
    NewPostText: string
    dispatch: (action: ActionsTypes) => void
}



export const MyPost = (props: MyPostPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(AddPostActionCreator())

        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewPostTextActionCreator(e.currentTarget.value))
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