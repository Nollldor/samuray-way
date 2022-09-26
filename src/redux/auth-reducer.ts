import {ActionsTypes} from "./redux-store";

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

export const setUserData = (id: number, email: string, login: string): setUserDataAT => ({

    type: 'SET-USER-DATA',
    data: {
        id,
        email,
        login,
        isAuth: false
    }
})

export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}

