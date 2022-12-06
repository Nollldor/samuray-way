import React, {FC} from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}


export const Profile: FC<ProfilePropsType> = ({profile, updateStatus, status}) => {

    return (
        <div className={s.profileImg}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <Posts/>
        </div>

    );
}