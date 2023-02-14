import React, {ChangeEvent, FC} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/dialogs-reducer";
import {Navigate} from 'react-router-dom'
import {ProfileAPI} from "../Profile/ProfileAPI";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


type DialogsPropsType = {
    dialogsPage: dialogsPageType
    addMessage: (newMessageBody: string) => void
    UpdateMessageBody: (text: string) => void
    isAuth: boolean
}


export const Dialogs = (props: DialogsPropsType) => {

    const DialogsElements = props.dialogsPage.dialogs.map(el => <Dialog key={el.id} title={el.name} id={el.id}/>)


    const MessagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

    const addNewMessage = (values: ValuesType) => {
        props.addMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}


type ValuesType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: FC<InjectedFormProps<ValuesType>> = ({...props}) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'}
                   validate={[requiredField, maxLength50]}/>
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm<ValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm)