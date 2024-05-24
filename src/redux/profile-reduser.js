const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    // Тексты постов на странице
    postData: [
        {id: 1, text: 'Привет! Как дела?'},
        {id: 2, text: 'Куда пропал?'},
        {id: 3, text: 'Да и хрен с тобой!'},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.random(),
                text: state.newPostText
            }
            return {...state, newPostText: '', postData: [...state.postData, newPost]};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer