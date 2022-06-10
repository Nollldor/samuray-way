type PostType = {
    messageText: string
    likesNumber: number
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
            {messageText: "It's my first message", likesNumber: 16},
            {messageText: "It's second message!", likesNumber: 4},
        ],

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