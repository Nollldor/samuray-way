import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

type MyPostPropsType = {
    addPost: (text: string) => void
}


export class MyPost extends React.PureComponent<MyPostPropsType> {

    //Pure Component делает это автоматически
    /*shouldComponentUpdate(nextProps: Readonly<MyPostPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps !== this.props || nextState != this.state
    }*/

    render() {
        const addPost = (values: AddNewPostDataType) => {
            this.props.addPost(values.newPostText)
        }

        return (
            <div>
                <h3>My posts</h3>
                <AddNewPostReduxForm onSubmit={addPost}/>
            </div>
        )
    }
}

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