import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Menubar from './pages/menubar';
import Signup from './pages/signup';
import './style.css';
import Login from './pages/login';
import Welcome from './pages/welcome';
import List from './pages/list';
import Editdetails from './pages/editdetails';

function App() {
  return (
    <Router>
    <div className="App">
    <Menubar/>
    <Routes>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/welcome' element={<Welcome />}></Route>
          <Route exact path='/list' element={<List />}></Route>
          <Route exact path='/editdetails/:id' element={<Editdetails />}></Route>
          

   </Routes>
   </div>
</Router>

  );
}

export default App;
