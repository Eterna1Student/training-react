import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";

// addPost('Главное не сойти с ума')

export let renderEntireTree = (state)=> {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App posts={state.profile.postData}
                 dialogs={state.dialogs.dialogsData}
                 text={state.dialogs.messageData}
                 addPost={addPost}
            />
        </React.StrictMode>
    )
}

