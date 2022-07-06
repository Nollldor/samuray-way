/*
import {AddPostActionCreator, ChangeNewPostTextActionCreator, profileReducer} from "./profile-reducer";
import {AddMessageActionCreator, dialogsReducer, UpdateMessageBodyActionCreator} from "./dialogs-reducer";

type PostType = {
    messageText: string
    likesNumber: number
    id: number
}
export type PostsDatatype = PostType[]

type FriendType = {
    name: string
    id: number
}
export type DialogsDatatype = FriendType[]

type MessageType = {
    message: string
    id: number
}
export type MessagesDatatype = MessageType[]

type profilePageType = {
    posts: PostsDatatype
    NewPostText: string
}

type dialogsPageType = {
    messages: MessagesDatatype
    NewMessageBody: string
    dialogs: DialogsDatatype
}

export type StateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPage,
}


export type StoreType = {
    _state: StateType,
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: (store: StoreType) => void) => void
    getState: () => StateType

    dispatch: (action: ActionsTypes) => void

}

export const store: StoreType = {
    //private
    _state: {
        profilePage: {
            posts: [
                {messageText: "It's my first message", likesNumber: 16, id: 0},
                {messageText: "It's second message!", likesNumber: 4, id: 1},
            ],
            NewPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                {message: "Yo", id: 1},
                {message: "hi!", id: 2},
                {message: "How are you&", id: 3},
            ],
            NewMessageBody: "",
            dialogs: [
                {name: "Dima", id: 1},
                {name: "Valera", id: 2},
                {name: "Sasha", id: 3},
                {name: "Sveta", id: 4},
            ],
        },

    },
    _callSubscriber(store: StoreType) {
        console.log("state changed")
    },

    //don't changes state methods
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this)
    }

}

export type ActionsTypes =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateMessageBodyActionCreator>



*/

export {}














