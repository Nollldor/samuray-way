import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDatatype} from "../../redux/state";


type ProfilePropsType = {
    PostsData: {
        posts: PostsDatatype
        NewPostText: string
    }
    addPostCallback: () => void
    ChangeNewPostText: (text:string) => void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <Posts PostsData={props.PostsData} addPostCallback={props.addPostCallback} ChangeNewPostText={props.ChangeNewPostText}/>
        </div>

    );
}