
import {AddMessageActionCreator, UpdateMessageBodyActionCreator} from "./dialogs-reducer";
import {ActionsTypes} from "./redux-store";

type PostType = {
    messageText: string
    likesNumber: number
    id: number
}

export type PostsDatatype = PostType[]

export type profilePageType = {
    posts: PostsDatatype
    NewPostText: string
}

const initialState: profilePageType = {
    posts: [
        {messageText: "It's my first message", likesNumber: 16, id: 0},
        {messageText: "It's second message!", likesNumber: 4, id: 1},
    ],
    NewPostText: 'it-kamasutra'
}

export const AddPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const ChangeNewPostTextActionCreator = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    text: text
} as const)


export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                likesNumber: 0,
                messageText: state.NewPostText,
                id: state.posts.length
            }
            state.posts.push(newPost)
            state.NewPostText = ""
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.NewPostText = action.text
            return state
        default:
            return state
    }
}

