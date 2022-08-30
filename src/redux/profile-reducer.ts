import {AddMessageActionCreator, UpdateMessageBodyActionCreator} from "./dialogs-reducer";
import {ActionsTypes} from "./redux-store";

type PostType = {
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
    NewPostText: string
    profile: ProfileType
}

const initialState: profilePageType = {
    posts: [
        {messageText: "It's my first message", likesNumber: 16, id: 0},
        {messageText: "It's second message!", likesNumber: 4, id: 1},
    ],
    NewPostText: 'it-kamasutra',
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

export const AddPost = () => ({
    type: 'ADD-POST'
} as const)

export const ChangeNewPostText = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    text: text
} as const)

export const setUserProfile = (userProfile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    userProfile
} as const)


export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {likesNumber: 0, messageText: state.NewPostText, id: state.posts.length}],
                NewPostText: ""
            }
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, NewPostText: action.text}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.userProfile}
        default:
            return state
    }
}

