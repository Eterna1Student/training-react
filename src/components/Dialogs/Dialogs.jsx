import React from "react";
import s from "./Dialogs.module.scss"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./newMessage/newMessage";


const Dialogs = (props) => {
// Эти 2 функции запускают рендер диалогов и сообщений
    let dialogs = props.dialogsPage.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messages = props.dialogsPage.messageData.map((message) => <Message text={message.text} key={message.id}/>)

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
                                dialogsPage={props.dialogsPage}
                                />
                </div>
            </div>
        </section>
    )
}

export default Dialogs;