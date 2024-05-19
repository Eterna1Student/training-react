import {renderEntireTree} from "../render";

let state = {

    profile: {
        // Тексты постов на странице
        postData: [
            {id: 1, text: 'Привет! Как дела?'},
            {id: 2, text: 'Куда пропал?'},
            {id: 3, text: 'Да и хрен с тобой!'},
        ]
    },

    dialogs: {
        // Диалоги
        dialogsData: [
            {id: 1, name: 'Витя'},
            {id: 2, name: 'Саша'},
            {id: 3, name: 'Маша'},
            {id: 4, name: 'Даша'},
            {id: 5, name: 'Слава'},
            {id: 6, name: 'Дима'}
        ],

        // Текст диалогов
        messageData: [
            {id: 1, text: 'Привет'},
            {id: 2, text: 'Как дела?'},
            {id: 3, text: 'Что делаешь?'},
            {id: 4, text: 'Сходим куда нибудь?'},
            {id: 5, text: 'Всё отлично'},
            {id: 6, text: 'Как жизнь?'}
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        text: postMessage
    }
    debugger
    state.profile.postData.push(newPost)
    renderEntireTree(state)
}

export default state;
