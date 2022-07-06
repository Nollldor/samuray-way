
import {ActionsTypes} from "./redux-store";

type MessageType = {
    message: string
    id: number
}
export type MessagesDatatype = MessageType[]

type FriendType = {
    name: string
    id: number
}
export type DialogsDatatype = FriendType[]

export type dialogsPageType = {
    messages: MessagesDatatype
    NewMessageBody: string
    dialogs: DialogsDatatype
}

const initialState: dialogsPageType = {
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
}




export const UpdateMessageBodyActionCreator = (text: string) => ({
    type: 'UPDATE-MESSAGE-BODY',
    body: text
} as const)

export const AddMessageActionCreator = () => ({
    type: "ADD-MESSAGE",
} as const)

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-MESSAGE-BODY':
            state.NewMessageBody = action.body
            return state
        case 'ADD-MESSAGE':
            const body = state.NewMessageBody
            const newMessage = {
                message: body,
                id: (state.messages.length + 1)
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

