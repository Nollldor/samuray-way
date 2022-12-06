import React, {FC} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile,updateStatus,status}) => {
    return (
        <>
            {/* <div>
                <img className={s.profileInfoImg}
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>*/}
            <div className={s.userInfo}>
                <div>
                    <img className={s.avatar} src={profile.photos.large} alt="user-avatar"/>
                </div>
                <ProfileStatus updateStatus={updateStatus} status={status}/>

                <div>Full Name: {profile.fullName}</div>
                {profile.lookingForAJob && <div>Looking for a job: {profile.lookingForAJobDescription}</div>}
                avatar+description
            </div>
        </>
    )
}