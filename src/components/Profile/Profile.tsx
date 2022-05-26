import React from 'react';
import s from './Profile.module.css'

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
            <div>
                my post
                <div>
                    new post
                </div>
            </div>
            <div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>

    );
}