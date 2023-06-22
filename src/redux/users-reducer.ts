import {ActionsTypes, AppThunk, DispatchType} from "./redux-store";
import {FollowResponseType, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/users-helper";

export type locationType = {
    country: string
    city: string
}

export type UserType = {
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

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    fetchingInProgress: number[]
}


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    fetchingInProgress: []
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
    users: UserType[]
}

export type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    page: number
}

export type setTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalUsersCount: number
}

export type toggleIsFetchingAT = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

export type toggleFetchingProgressAT = {
    type: "TOGGLE-FETCHING-PROGRESS"
    isFetching: boolean
    uID: number
}

export const followSuccess = (id: number): followAT => ({
    type: 'FOLLOW',
    id
})

export const unfollowSuccess = (id: number): unfollowAT => ({
    type: "UNFOLLOW",
    id
})

export const setUsers = (users: UserType[]): setUsersAT => ({
    type: "SET-USERS",
    users
})

export const setCurrentPage = (page: number): setCurrentPageAT => ({
    type: "SET-CURRENT-PAGE",
    page
})

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAT => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
})

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingAT => ({
    type: "TOGGLE-IS-FETCHING",
    isFetching
})

export const toggleFetchingProgress = (isFetching: boolean, uID: number): toggleFetchingProgressAT => ({
    type: "TOGGLE-FETCHING-PROGRESS",
    isFetching,
    uID
})


export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: updateObjectInArray(state.users, action.id, {followed: true})}
        case "UNFOLLOW":
            return {...state, users: updateObjectInArray(state.users, action.id, {followed: false})}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-FETCHING-PROGRESS":
            if (action.isFetching) {
                return {...state, fetchingInProgress: [...state.fetchingInProgress, action.uID]}
            } else {
                return {...state, fetchingInProgress: state.fetchingInProgress.filter(uid => uid !== action.uID)}
            }

        default:
            return state
    }
}

export const getUsersTC = (page: number, pageSize: number): AppThunk => (async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(+data.totalCount))

})

const followUnfollowFlow = async (dispatch: DispatchType,
                                  uID: number,
                                  apiMethod: (uID: number) => Promise<FollowResponseType>,
                                  actionCreator: (uID: number) => followAT | unfollowAT) => {

    dispatch(toggleFetchingProgress(true, uID))
    let data = await apiMethod(uID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(uID))
    }
    dispatch(toggleFetchingProgress(false, uID))
}


export const followTC = (uID: number): AppThunk => ((dispatch) => {
    followUnfollowFlow(dispatch, uID, usersAPI.follow.bind(usersAPI), followSuccess)
})

export const unfollowTC = (uID: number): AppThunk => ((dispatch) => {
    followUnfollowFlow(dispatch, uID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
})