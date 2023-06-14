import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

type MyPostPropsType = {
    addPost: (text: string) => void
}


export const MyPost = React.memo((props: MyPostPropsType) => {
    const addPost = (values: AddNewPostDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
        </div>
    )
});

type AddNewPostDataType = {
    newPostText: string
}


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: FC<InjectedFormProps<AddNewPostDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newPostText'} placeholder={"New Post"}
                   validate={[requiredField, maxLength10]}/>
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