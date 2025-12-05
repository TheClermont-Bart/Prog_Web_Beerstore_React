import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from "./Pages/Home"
import Stores from "./Pages/Stores"
import Modalites from "./Pages/Modalites"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Registrer from "./Pages/Register"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/stores' element={<Stores/>}> </Route>
        <Route path='/Modalites' element={<Modalites/>}> </Route>
        <Route path='/About' element={<About/>}> </Route>
        <Route path='/Login' element={<Login/>}> </Route>
        <Route path='/Registrer' element={<Registrer/>}> </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
