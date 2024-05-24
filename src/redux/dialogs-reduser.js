const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
    ],

    newMessagesBody: ''
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessagesBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessagesBody
            return {...state, newMessagesBody: '', messageData: [...state.messageData, {id: 7, text: body}]}
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer