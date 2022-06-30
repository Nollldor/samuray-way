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

type dialogsPage = {
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

    //changes state methods
    /*addPost () {
        const newPost: PostType = {
            likesNumber: 0,
            messageText: this._state.profilePage.NewPostText,
            id: this._state.profilePage.posts.length
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.NewPostText = ""
        this._callSubscriber(this._state)
    },*/
    /*ChangeNewPostText(text: string) {
        this._state.profilePage.NewPostText = text
        this._callSubscriber(this._state)
    },*/

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                likesNumber: 0,
                messageText: this._state.profilePage.NewPostText,
                id: this._state.profilePage.posts.length
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.NewPostText = ""
            this._callSubscriber(this)
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.NewPostText = action.text
            this._callSubscriber(this)
        } else if (action.type === 'UPDATE-MESSAGE-BODY') {
            this._state.dialogsPage.NewMessageBody = action.body
            this._callSubscriber(this)
        } else if (action.type === 'ADD-MESSAGE') {
            const body = this._state.dialogsPage.NewMessageBody
            const newMessage = {
                message: body,
                id: (this._state.dialogsPage.messages.length + 1)
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this)
        }
    },

}

export type ActionsTypes =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateMessageBodyActionCreator>

export const AddPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const ChangeNewPostTextActionCreator = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    text: text
} as const)

export const UpdateMessageBodyActionCreator = (text: string) => ({
    type: 'UPDATE-MESSAGE-BODY',
    body: text
} as const)

export const AddMessageActionCreator = () => ({
    type: "ADD-MESSAGE",
} as const)














