import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {subscribe, addPost, updateNewPostText} from "./redux/state";

let renderEntireTree = (state)=> {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App posts={state.profile.postData}
                 updateNewPostText={updateNewPostText}
                 newPostText={state.profile.newPostText}
                 dialogs={state.dialogs.dialogsData}
                 text={state.dialogs.messageData}
                 addPost={addPost}
            />
        </React.StrictMode>
    )
}

renderEntireTree(state)

subscribe(renderEntireTree)