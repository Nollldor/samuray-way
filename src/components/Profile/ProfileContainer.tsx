import {connect} from "react-redux";
import {ProfileAPI} from "./ProfileAPI";
import {StateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

export type mapStateToPropsType = {
    profile: ProfileType


}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPI)