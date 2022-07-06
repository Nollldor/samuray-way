import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDatatype} from "../../redux/profile-reducer";
import {DispatchType} from "../../redux/redux-store";



type ProfilePropsType = {
    PostsData: {
        posts: PostsDatatype
        NewPostText: string
    }
    dispatch: DispatchType
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <Posts PostsData={props.PostsData} dispatch={props.dispatch.bind(props.PostsData)}/>
        </div>

    );
}