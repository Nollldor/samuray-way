let renderEntireTree = (state:StateType) => {
    console.log("state changed")
}


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


export const state: StateType = {
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

}


export const addPost = () => {
    const newPost: PostType = {
        likesNumber: 0,
        messageText: state.profilePage.NewPostText,
        id: state.profilePage.posts.length
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.NewPostText = ""
    renderEntireTree(state)
}

export const ChangeNewPostText = (text: string) => {
    state.profilePage.NewPostText = text
    renderEntireTree(state)
}

export const subscribe = (observer: (state:StateType)=>void) => {
    renderEntireTree = observer
}