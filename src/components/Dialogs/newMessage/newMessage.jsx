import React from "react";
import s from "./newMessage.module.scss"
import {sendMessageCreator} from "../../../redux/dialogs-reduser";

const NewMessage = (props) => {

    let state = props.dialogsPage
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <form className={s.message} action="#">
            <textarea className={s.message__text}
                      value={state.newMessagesBody}
                      onChange={onNewMessageChange}
                      name="textPost"
                      placeholder='Твоя новость'
            ></textarea>
            <button className={s.message__btn} type='submit' onClick={onSendMessageClick}>Опубликовать</button>
        </form>
    )
}

export default NewMessage;