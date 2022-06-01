import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div>
                avatar+description
            </div>
            <Posts/>
        </div>

    );
}