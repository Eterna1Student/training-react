import React from "react";
import s from "./Dialogs.module.scss"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./newMessage/newMessage";


const Dialogs = (props) => {
// Эти 2 функции запускают рендер диалогов и сообщений
    let dialogs = props.state.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messages = props.state.messageData.map((message) => <Message text={message.text} key={message.id}/>)
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <section>
            <h1 className={s.title}>DIALOGS</h1>
            <div className={s.content}>
                <div className={s.content__dialogs}>
                    {dialogs}
                </div>
                <div className={s.content__messages}>
                    {messages}
                    <NewMessage updateNewMessageBody={props.updateNewMessageBody}
                                sendMessage={props.sendMessage}
                                newMessageBody={props.state.newMessagesBody}
                                updateNewPostText={props.updateNewPostText}
                                />
                </div>
            </div>
        </section>
    )
}

export default Dialogs;