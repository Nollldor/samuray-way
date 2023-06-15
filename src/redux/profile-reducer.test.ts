import {addPost, deletePost, profilePageType, profileReducer} from "./profile-reducer";

let initialState: profilePageType

beforeEach(() => {
    initialState = {
        posts: [
            {messageText: "It's my first message", likesNumber: 16, id: 0},
            {messageText: "It's second message!", likesNumber: 4, id: 1},
        ],
        status: '',
        profile: {
            userId: 0,
            lookingForAJob: false,
            lookingForAJobDescription: "",
            fullName: "",
            contacts: {
                github: "",
                vk: "",
                facebook: "",
                instagram: "",
                twitter: "",
                website: "",
                youtube: "",
                mainLink: "",
            },

            photos: {
                small: "",
                large: "",
            }
        }
    }
})

it('new post should be added', () => {
    let action = addPost("it-react")
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
})

it('new post should be correct', () => {
    let action = addPost("it-react")
    let newState = profileReducer(initialState, action)
    expect(newState.posts[2].messageText).toBe("it-react")
})

it('after deleted length of posts should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(1)
})

