import {connect} from "react-redux";
import {ProfileAPI} from "./ProfileAPI";
import {StateType} from "../../redux/redux-store";
import {getProfileThunk, ProfileType, setUserProfile} from "../../redux/profile-reducer";


export type mapStateToPropsType = {
    profile: ProfileType


}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

// @ts-ignore
export const ProfileContainer = connect(mapStateToProps, {setUserProfile, getProfileThunk})(ProfileAPI)