import React from "react";
import s from "./newMessage.module.scss"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reduser";

const NewMessage = (props) => {

    let state = props.store.getState().dialogs
    let newMessageBody = state.newMessagesBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        console.log(props.store)
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <form className={s.message} action="#">
            <textarea className={s.message__text}
                      value={newMessageBody}
                      onChange={onNewMessageChange}
                      name="textPost"
                      placeholder='Твоя новость'
            ></textarea>
            <button className={s.message__btn} type='submit' onClick={onSendMessageClick}>Опубликовать</button>
        </form>
    )
}

export default NewMessage;