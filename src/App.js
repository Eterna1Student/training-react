import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
                  <Routes>
                      <Route path="/" element={<Profile name={'Олег К.'}/>} />
                      <Route path="/dialogs" element={<Dialogs />} />
                      <Route path="/dialogs/:userId" element={<Dialogs />} />
                  </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
