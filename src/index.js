import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state)=> {
    root.render(
        <React.StrictMode>
            <App posts={store.getState().profile.postData}
                 text={store.getState().dialogs.messageData}
                 newPostText={store.getState().profile.newPostText}
                 dialogs={store.getState().dialogs.dialogsData}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </React.StrictMode>
    )
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)