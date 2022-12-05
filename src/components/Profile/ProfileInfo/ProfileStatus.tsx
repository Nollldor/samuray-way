import {FC, useState} from "react";

type PropsType = {}

export const ProfileStatus: FC<PropsType> = ({}) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
    }

    return editMode ?
        <input autoFocus={true} onBlur={offEditMode} value={"title"}/>
        : <span onDoubleClick={onEditMode}> title </span>

}