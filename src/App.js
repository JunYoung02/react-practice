import React from 'react';
import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import Review from './components/Review'

import {Route, Routes} from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home';
// import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
        <Route element={<Header/>}>
        <Route path='/' element={<Food/>}/>
        <Route path='/review' element={<Review/>}/>
      </Route>
    </Routes>
  );
};

export default App;
