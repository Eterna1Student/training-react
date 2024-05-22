const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


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
            ]
        }
    },
    _callSubscriber() {
        console.log('asdasdasd')
    },
    // _addPost() {
    //     const newPost = {
    //         id: Math.random(),
    //         text: this._state.profile.newPostText
    //     }
    //     this._state.profile.postData.push(newPost)
    //     this._state.profile.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // _updateNewPostText(newText) {
    //     this._state.profile.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: Math.random(),
                text: this._state.profile.newPostText
            }
            this._state.profile.postData.push(newPost)
            this._state.profile.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text})

window.store = store
export default store;

