import {ActionsTypes, DispatchType} from "./redux-store";
import {authAPI} from "../api/api";

export type userDataType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}


const initialState: userDataType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
}

export type setUserDataAT = {
    type: 'SET-USER-DATA'
    data: userDataType
}

export const setUserData = (id: number, email: string, login: string, isAuth: boolean): setUserDataAT => ({

    type: 'SET-USER-DATA',
    data: {
        id,
        email,
        login,
        isAuth
    }
})

export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}

        default:
            return state
    }
}


export const authMeThunk = () => {
    return (dispatch: DispatchType) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserData(id, email, login,true))
            }
        })
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(authMeThunk())
            }else{
                alert("not login")
            }
        })
    }
}

export const logoutThunk = () => {
    return (dispatch: any) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(0,"" , "",false))
            }else{
                alert("not logout")
            }
        })
    }
}