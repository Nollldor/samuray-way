import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDatatype} from "../../redux/state";


type ProfilePropsType = {
    PostsData: {
        posts: PostsDatatype
        NewPostText: string
    }
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <Posts PostsData={props.PostsData} dispatch={props.dispatch.bind(props.PostsData)}/>
        </div>

    );
}