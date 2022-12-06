import {ChangeEvent, FC, useState} from "react";

type PropsType = {
    updateStatus: (status: string) => void
    status: string
}

export const ProfileStatus: FC<PropsType> = ({updateStatus, status}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(status)

    const onEditMode = () => {
        setEditMode(true)
    }

    const onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
    }

    const offEditMode = () => {
        setEditMode(false)
        updateStatus(title)
    }

    return editMode ?
        <input autoFocus={true} onBlur={offEditMode} placeholder={"Change your status"} onChange={onChangeStatus} value={title}/>
        : <span onDoubleClick={onEditMode}>Status: {status} </span>

}