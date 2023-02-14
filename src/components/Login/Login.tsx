import {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";

type LoginDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: FC<InjectedFormProps<LoginDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={'login'} placeholder={"Login"} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={'password'} placeholder={"Password"} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
            remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export const Login = () => {

    const onSubmit = (loginData: LoginDataType) => {
        console.log(loginData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}