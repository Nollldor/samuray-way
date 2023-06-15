import {ActionsTypes, AppThunk, DispatchType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
    type: 'auth/SET-USER-DATA'
    data: userDataType
}

export const setUserData = (id: number, email: string, login: string, isAuth: boolean): setUserDataAT => ({

    type: 'auth/SET-USER-DATA',
    data: {
        id,
        email,
        login,
        isAuth
    }
})

export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "auth/SET-USER-DATA":
            return {...state, ...action.data}
        default:
            return state
    }
}


export const authMeThunk = (): AppThunk => {
    return async (dispatch) => {
        let data = await authAPI.authMe()
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        }
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authMeThunk())
        } else {
            const errorMessage = (data.messages && data.messages.length > 0) ? data.messages[0] : "some error"
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    }
}

export const logoutThunk = (): AppThunk => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserData(0, "", "", false))
        } else {
            alert("not logout")
        }
    }
}