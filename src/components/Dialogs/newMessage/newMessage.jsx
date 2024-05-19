import React from "react";
import s from "./newMessage.module.scss"

const NewMessage = (props) => {

    let newMessageElement = React.createRef()
    let addMessage = ()=> alert(newMessageElement.current.value)

    return (
        <form className={s.message} action="#">
            <textarea className={s.message__text} name="textPost" ref={newMessageElement} placeholder='Твоя новость'></textarea>
            <button className={s.message__btn} type='submit' onClick={addMessage}>Опубликовать</button>
        </form>
    )
}

export default NewMessage;