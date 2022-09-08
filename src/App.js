import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Formations from './components/Formations';
import FormationDetails from './components/Formations/FormationDetails';
import Lecture from './components/Formations/Lecture';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
return (
  
  <BrowserRouter>
  
  <NavigationBar />

  <Routes>
    <Route element={<NavigationBar/>} />
    
    <Route path='/' exact element={<Home/>} />

    <Route path='formations' exact element={<Formations/>}/>
    <Route path='formations/:id'  element= {<FormationDetails/>}/>
    <Route path='lecture/:id'  element= {<Lecture/>}/>
    
    
  </Routes>

  <Footer />

  </BrowserRouter>
);
}

export default App;