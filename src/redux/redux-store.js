import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
})

export const store = configureStore({
    reducer: reducers
})

export default store