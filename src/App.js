import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Formations from './components/Formations';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <Route path='/formations' element={<Formations/>} />
    <Route path='/events' element={<Events />} />
    <Route path='/annual' element={<AnnualReport />} />
    <Route path='/team' element={<Teams />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/sign-up' element={<SignUp />} />
  </Routes>

  <Footer />

  </BrowserRouter>
);
}

export default App;
