import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfileAPIPropsType = {
    profile: ProfileType
    setUserProfile: (userProfile: ProfileType) => void
}

export class ProfileAPI extends React.Component<ProfileAPIPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        console.log(this.props.profile)
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}