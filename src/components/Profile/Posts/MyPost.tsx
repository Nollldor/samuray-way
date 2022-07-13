import React, {ChangeEvent} from "react";

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