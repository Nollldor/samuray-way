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
    dialogs: DialogsDatatype
}

export type StateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPage,
}

export const store = {
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
        dialogs: [
            {name: "Dima", id: 1},
            {name: "Valera", id: 2},
            {name: "Sasha", id: 3},
            {name: "Sveta", id: 4},
        ],
    },

},
    getState(){
      return this._state
    },
    _callSubscriber (state:StateType) {
        console.log("state changed")
    },
    addPost () {
        const newPost: PostType = {
            likesNumber: 0,
            messageText: this._state.profilePage.NewPostText,
            id: this._state.profilePage.posts.length
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.NewPostText = ""
        this._callSubscriber(this._state)
    },
    ChangeNewPostText (text: string) {
        this._state.profilePage.NewPostText = text
        this._callSubscriber(this._state)
    },
    subscribe (observer: (state:StateType)=>void) {
        this._callSubscriber = observer
    },
}
















