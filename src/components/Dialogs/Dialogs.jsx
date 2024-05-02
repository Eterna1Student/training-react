import React from "react";
import s from "./Dialogs.module.scss"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Витя'},
        {id: 2, name: 'Саша'},
        {id: 3, name: 'Маша'},
        {id: 4, name: 'Даша'},
        {id: 5, name: 'Слава'},
        {id: 6, name: 'Дима'}
    ]

    let messageData = [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'Как дела?'},
        {id: 3, text: 'Что делаешь?'},
        {id: 4, text: 'Сходим куда нибудь?'},
        {id: 5, text: 'Всё отлично'},
        {id: 6, text: 'Как жизнь?'}
    ]
// Эти 2 функции запускают рендер диалогов и сообщений
    let dialogs = dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messages = messageData.map((message) => <Message text={message.text} key={message.id}/>)


    return (
        <section>
            <h1 className={s.title}>DIALOGS</h1>
            <div className={s.content}>
                <div className={s.content__dialogs}>
                    {dialogs}
                </div>
                <div className={s.content__messages}>
                    {messages}
                </div>
            </div>
        </section>
    )
}

export default Dialogs;