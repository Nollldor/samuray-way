import {ActionsTypes} from "./redux-store";

export type locationType = {
    country: string
    city: string
}

export type userType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    /*location: locationType*/
}

export type usersPageType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


const initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 129,
    currentPage: 1
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

export type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    page: number
}

export type setTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalUsersCount: number
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

export const setCurrentPageAC = (page: number): setCurrentPageAT => ({
    type: "SET-CURRENT-PAGE",
    page
})

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountAT => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
})


export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

