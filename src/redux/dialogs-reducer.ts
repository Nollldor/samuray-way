import {ActionsTypes} from "./redux-store";
import {message} from "antd";

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
    dialogs: DialogsDatatype
}

const initialState: dialogsPageType = {
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
}


export const AddMessageActionCreator = (newMessageBody: string) => ({
    type: "ADD-MESSAGE",
    newMessageBody
} as const)

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state, messages: [...state.messages, {
                    message: action.newMessageBody,
                    id: (state.messages.length + 1)
                }]
            }
        default:
            return state
    }
}

