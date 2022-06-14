import React from "react";

type MyPostPropsType = {
    addPostCallback: (text: string) => void
}

export const MyPost = (props: MyPostPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

        return (
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}>New Post</textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Отправить</button>
                    </div>
                </div>
            </div>
        )
    }