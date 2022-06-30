export const profileReducer = (state:any, action:any) => {
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

export const AddPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const ChangeNewPostTextActionCreator = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    text: text
} as const)