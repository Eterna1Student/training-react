import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
                  <Routes>
                      <Route path="/" element={<Profile name={'Олег К.'} store={props.store} />} />
                      <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />    {/*Страница диалогов (Общая)*/}
                      <Route path="/dialogs/:userId" element={<DialogsContainer store={props.store} />} />   {/*Страница диалогов (C учётом ID)*/}
                  </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
