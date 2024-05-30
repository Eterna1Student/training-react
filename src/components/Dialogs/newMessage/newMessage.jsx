import React from "react";
import s from "./newMessage.module.scss"

const NewMessage = (props) => {



    return (
        <form className={s.message} action="#">
            <textarea className={s.message__text}
                      value={props.newMessagesBody}
                      onChange={props.updateNewPostText}
                      name="textPost"
                      placeholder='Твоя новость'
            ></textarea>
            <button className={s.message__btn} type='submit' onClick={props.sendMessage}>Опубликовать</button>
        </form>
    )
}

export default NewMessage;