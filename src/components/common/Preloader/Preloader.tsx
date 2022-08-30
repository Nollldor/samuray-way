import React, {FC} from "react";
import preloader from "../../../assets/img/preloader.gif";

type PreloaderPropsType = {}

export const Preloader: FC<PreloaderPropsType> = (props) => {
    return <img src={preloader}/>
}