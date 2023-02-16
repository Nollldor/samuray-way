import React, {FC, useEffect} from 'react';
import {Profile} from "./Profile";
import {ProfileType} from "../../redux/profile-reducer";
import {useNavigate, useParams,} from "react-router-dom";

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
    const navigate = useNavigate()

    useEffect(() => {

        if (!userId) {
            userId = props.authorisedUserID.toString()
            if (userId === '0') {
                navigate('/login')
            }
        }
        props.getProfileThunk(+userId)
        props.getStatusThunk(+userId)
    }, [userId])

    return <Profile {...props} profile={props.profile} status={props.profileStatus}
                    updateStatus={props.updateStatusThunk}/>
}


/*
export const WithUrlDataProfileContainer = withRouter(ProfileAPI)*/
