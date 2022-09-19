import React, {FC, useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType} from "../../redux/profile-reducer";
import {useParams,} from "react-router-dom";


export type ProfileAPIPropsType = {
    profile: ProfileType
    setUserProfile: (userProfile: ProfileType) => void
}


/*export function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props: T & WithRouterType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component{...props} router={{ location, navigate, params }}/>
        );
    }
    return ComponentWithRouterProp;
}*/

/*type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;*/

export const ProfileAPI: FC<ProfileAPIPropsType> = (props) => {
    let { userId } = useParams()
    useEffect(()=>{

        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            props.setUserProfile(response.data)
        })
    },[userId])
    return <Profile {...props} profile={props.profile}/>

}


/*
export const WithUrlDataProfileContainer = withRouter(ProfileAPI)*/
