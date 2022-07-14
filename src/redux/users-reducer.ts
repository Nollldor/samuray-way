import {ActionsTypes} from "./redux-store";

export type locationType = {
    country: string
    city: string
}

export type userType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type usersPageType = {
    users: userType[]
}


const initialState: usersPageType = {
    users: []
}


export type followAT = {
    type: 'FOLLOW'
    id: number
}

export type unfollowAT = {
    type: 'UNFOLLOW'
    id: number
}

export type setUsersAT = {
    type: 'SET-USERS'
    users: userType[]
}

export const followAC = (id: number): followAT => ({
    type: 'FOLLOW',
    id
})

export const unfollowAC = (id: number): unfollowAT => ({
    type: "UNFOLLOW",
    id
})

export const setUsersAC = (users: userType[]): setUsersAT => ({
    type: "SET-USERS",
    users
})


export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: [...state.users,...action.users]}
        default:
            return state
    }
}

