import {FC, HTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";
import styles from "./FormControl.module.css";

type FormControlPropsType = {
    input: HTMLAttributes<HTMLElement>
    meta: any
    children: React.ReactNode
}

export const FormControl: FC<FormControlPropsType> = ({input, children, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            {children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

type ElementPropsType = {
    input: HTMLAttributes<HTMLElement>
    meta: any
}

export const Textarea: FC<ElementPropsType> = ({input, meta,...props}) => {
    return <FormControl {...props} input={input} meta={meta}>
        <textarea {...input} {...props}/>
    </FormControl>

}

export const Input: FC<ElementPropsType> = ({input, meta,...props}) => {
    return <FormControl {...props} input={input} meta={meta}>
        <input {...input} {...props}/>
    </FormControl>

}
