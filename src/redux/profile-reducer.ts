import {ActionsTypes, AppThunk, DispatchType} from "./redux-store";
import {profileAPI} from "../api/api";

export type PostType = {
    messageText: string
    likesNumber: number
    id: number
}

export type PostsDatatype = PostType[]

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

    photos: {
        small: string
        large: string
    }
}

export type profilePageType = {
    posts: PostsDatatype
    status: string
    profile: ProfileType
}

const initialState: profilePageType = {
    posts: [
        {messageText: "It's my first message", likesNumber: 16, id: 0},
        {messageText: "It's second message!", likesNumber: 4, id: 1},
    ],
    status: '',
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },

        photos: {
            small: "",
            large: "",
        }
    }
}

export const addPost = (newPostText: string) => ({
    type: 'ADD-POST',
    newPostText
} as const)

export const setUserProfile = (userProfile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    userProfile
} as const)

export const setStatus = (status: string) => ({
    type: "SET-STATUS",
    status
} as const)

export const deletePost = (postId: number) => ({
    type: "DELETE-POST",
    postId
} as const)


export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newState = {
                ...state,
                posts: [...state.posts,
                    {messageText: action.newPostText, likesNumber: 0, id: state.posts.length}]
            }
            console.log(newState)
            return newState
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.userProfile}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter((p)=> p.id !== action.postId)}
        default:
            return state
    }
}


export const getProfileThunk = (userID: number): AppThunk => {
    return (dispatch) => {
        profileAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatusThunk = (userID: number): AppThunk => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatusThunk = (status: string): AppThunk => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            data.resultCode === 0 &&
            dispatch(setStatus(status))
        })
    }
}

