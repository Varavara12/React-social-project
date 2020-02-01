import React from "react";
import s from "./FormsControls.module.css"
                               /*делаем рекстуризацию отдельно прокидываем input, meta*/
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};