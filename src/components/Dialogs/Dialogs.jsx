import React from "react";
import s from "./Dialogs.module.scss"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./newMessage/newMessage";


const Dialogs = (props) => {

// Эти 2 функции запускают рендер диалогов и сообщений
    let dialogs = props.dialogs.map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messages = props.text.map((message) => <Message text={message.text} key={message.id}/>)


    return (
        <section>
            <h1 className={s.title}>DIALOGS</h1>
            <div className={s.content}>
                <div className={s.content__dialogs}>
                    {dialogs}
                </div>
                <div className={s.content__messages}>
                    {messages}
                    <NewMessage store={props.store} />
                </div>
            </div>
        </section>
    )
}

export default Dialogs;