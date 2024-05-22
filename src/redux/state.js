import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";


let store = {
    _state: {
        profile: {
            // Тексты постов на странице
            postData: [
                {id: 1, text: 'Привет! Как дела?'},
                {id: 2, text: 'Куда пропал?'},
                {id: 3, text: 'Да и хрен с тобой!'},
            ],
            newPostText: ''
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
            ],

            newMessagesBody: ''
        }
    },
    _callSubscriber() {
        console.log('asdasdasd')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store;

