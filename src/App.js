import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annualreport';
import Teams from './pages/teams';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
  
  <BrowserRouter>
  <NavigationBar />
  <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/events' element={<Events />} />
    <Route path='/annual' element={<AnnualReport />} />
    <Route path='/team' element={<Teams />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/sign-up' element={<SignUp />} />
  </Routes>
  </BrowserRouter>
);
}

export default App;
