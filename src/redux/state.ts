import {renderEntireTree} from "../render";

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


export const addPost = (text: string) => {
    const newPost: PostType = {
        likesNumber: 0,
        messageText: text,
        id: state.profilePage.posts.length
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}