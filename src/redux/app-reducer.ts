import {ActionsTypes, DispatchType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {authMeThunk} from "./auth-reducer";

export type appReducerDataType = {
    initialized: boolean
}


const initialState: appReducerDataType = {
    initialized: false,
}

export const setInitializedAC = (initialized: boolean) => ({
    type: 'SET-INITIALIZED',
    initialized
} as const)

export const appReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: action.initialized}

        default:
            return state
    }
}


export const initializeAppTC = () => {
    return (dispatch: any) => {
        dispatch(authMeThunk()).then(()=>{
            dispatch(setInitializedAC(true))
        })
    }
}
