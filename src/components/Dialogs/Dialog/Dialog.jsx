import React from "react";
import s from "./Dialog.module.scss"
import {NavLink} from "react-router-dom";


const Dialog = ({name, id}) => {
    return (
        <NavLink className={s.content__dialog} to={'/dialogs/' + id}>{name}</NavLink>
    )

}


export default Dialog;