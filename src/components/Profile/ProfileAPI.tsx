import React, {FC, useEffect} from 'react';
import {Profile} from "./Profile";
import {ProfileType} from "../../redux/profile-reducer";
import {useParams,} from "react-router-dom";

export type ProfileAPIPropsType = {
    profile: ProfileType
    setUserProfile: (userProfile: ProfileType) => void
    getProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    isAuth: boolean
    profileStatus: string
    authorisedUserID: number
}

export const ProfileAPI: FC<ProfileAPIPropsType> = (props) => {
    let {userId} = useParams()
    useEffect(() => {

        if (!userId) {
            userId = props.authorisedUserID.toString()
        }
        props.getProfileThunk(+userId)
        props.getStatusThunk(+userId)
    }, [userId])

    return <Profile {...props} profile={props.profile} status={props.profileStatus} updateStatus={props.updateStatusThunk}/>
}


/*
export const WithUrlDataProfileContainer = withRouter(ProfileAPI)*/
