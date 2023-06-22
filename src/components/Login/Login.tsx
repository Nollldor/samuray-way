import {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "utils/validators/validators";
import {loginThunk} from "redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "redux/redux-store";
import { useNavigate } from 'react-router-dom';
import styles from "../../components/common/FormControls/FormControl.module.css"

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: FC<InjectedFormProps<LoginDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={'email'} placeholder={"Email"} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={'password'} placeholder={"Password"} type={"password"} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
            remember me
        </div>
        {props.error && <div className={styles.formSummaryError}> {props.error} </div>}
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
    const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (loginData: LoginDataType) => {
        dispatch(loginThunk(loginData.email, loginData.password, loginData.rememberMe))
    }

    if(isAuth){
        navigate("/profile")
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}