import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={state.profile.postData} dialogs={state.dialogs.dialogsData} text={state.dialogs.messageData}/>
  </React.StrictMode>
);
