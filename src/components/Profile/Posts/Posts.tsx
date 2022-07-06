import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {StateType} from "../../../redux/redux-store";
import {MyPostContainer} from "./MyPostContainer";
import {StoreContext} from "../../../StoreContext";

export const Posts = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState() as StateType
                    const PostsElements = state.profilePage.posts.map((post, index) => <Post key={index}
                                                                                             messageText={post.messageText}
                                                                                             likesNumber={post.likesNumber}/>)
                    return (
                        <div className={s.profile}>
                            <MyPostContainer />

                            <div className={s.messages}>
                                {PostsElements}
                            </div>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>

    );
}