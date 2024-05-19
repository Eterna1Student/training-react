import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import {addPost} from "./redux/state";


function App(props) {

  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
                  <Routes>
                      <Route path="/" element={<Profile name={'Олег К.'} posts={props.posts} addPost={props.addPost}/>} />
                      <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} text={props.text} />} />    {/*Страница диалогов (Общая)*/}
                      <Route path="/dialogs/:userId" element={<Dialogs dialogs={props.dialogs} text={props.text} />} />   {/*Страница диалогов (C учётом ID)*/}
                  </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
