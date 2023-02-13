import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostPropsType = {
    addPost: (text: string) => void
}


export const MyPost = (props: MyPostPropsType) => {
    const addPost = (values: AddNewPostDataType) => {
            props.addPost(values.newPostText)
    }

    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
        </div>
    )
}

type AddNewPostDataType = {
    newPostText: string
}


const AddNewPostForm: FC<InjectedFormProps<AddNewPostDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="input" name={'newPostText'} placeholder={"New Post"}/>
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm<AddNewPostDataType>({
    // a unique name for the form
    form: 'addNewPost'
})(AddNewPostForm)