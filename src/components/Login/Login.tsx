import {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: FC<InjectedFormProps<LoginDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="input" name={'login'} placeholder={"Login"}/>
        </div>
        <div>
            <Field component="input" name={'password'} placeholder={"Password"}/>
        </div>
        <div>
            <Field component="input" name={'rememberMe'} type={'checkbox'}/>
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