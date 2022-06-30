export const dialogsReducer = (state:any, action:any) => {
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

export const UpdateMessageBodyActionCreator = (text: string) => ({
    type: 'UPDATE-MESSAGE-BODY',
    body: text
} as const)

export const AddMessageActionCreator = () => ({
    type: "ADD-MESSAGE",
} as const)