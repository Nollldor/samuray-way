import React, {FC, useEffect} from 'react';
import {Profile} from "./Profile";
import {ProfileType} from "../../redux/profile-reducer";
import {Navigate, useParams,} from "react-router-dom";

export type ProfileAPIPropsType = {
    profile: ProfileType
    setUserProfile: (userProfile: ProfileType) => void
    getProfileThunk: (userId: number) => void
    isAuth: boolean
}

export const ProfileAPI: FC<ProfileAPIPropsType> = (props) => {
    let {userId} = useParams()
    useEffect(() => {

        if (!userId) {
            userId = '2'
        }
        props.getProfileThunk(+userId)
    }, [userId])

    return <Profile {...props} profile={props.profile}/>
}


/*
export const WithUrlDataProfileContainer = withRouter(ProfileAPI)*/
