import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state)=> {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App posts={store.getState().profile.postData}
                     text={store.getState().dialogs.messageData}
                     newPostText={store.getState().profile.newPostText}
                     dialogs={store.getState().dialogs.dialogsData}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                     state={state}
                />
            </Provider>
        </React.StrictMode>
    )
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})