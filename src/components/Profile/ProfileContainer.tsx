import {connect} from "react-redux";
import {ProfileAPI} from "./ProfileAPI";
import {StateType} from "../../redux/redux-store";
import {
    getProfileThunk,
    getStatusThunk,
    ProfileType,
    setUserProfile,
    updateStatusThunk
} from "../../redux/profile-reducer";


export type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    profileStatus: string
    authorisedUserID: number
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorisedUserID: state.auth.id
})

// @ts-ignore
export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk
})(ProfileAPI)