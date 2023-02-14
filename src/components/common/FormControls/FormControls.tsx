import {FC, TextareaHTMLAttributes} from "react";
import styles from "./FormControl.module.css";

type PropsType = {
    input: TextareaHTMLAttributes<HTMLTextAreaElement>
    meta: any
}

export const Textarea: FC<PropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}