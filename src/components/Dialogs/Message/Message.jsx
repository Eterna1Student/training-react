import React from "react";
import s from "./Message.module.scss"
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.message__avatar} src='../avatar.jpg' alt="Аватарка"/>
            <p className={s.message__text}>
                {props.text}
            </p>
            <span className={s.message__name}>{props.name}</span>
        </div>
    )
}

export default Message;