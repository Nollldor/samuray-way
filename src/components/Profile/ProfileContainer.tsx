import {connect} from "react-redux";
import {ProfileAPI} from "./ProfileAPI";
import {StateType} from "../../redux/redux-store";
import {getProfileThunk, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean

}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

// @ts-ignore
export const ProfileContainer = connect(mapStateToProps, {setUserProfile, getProfileThunk})(ProfileAPI)