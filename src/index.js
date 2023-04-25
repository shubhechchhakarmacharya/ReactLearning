import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import Header from './header';
import Banner from './Banner';
// import Gallery from './Gallery';
import reportWebVitals from './reportWebVitals';
import Conditional from './Conditional';
import Use from './Use';
import Timer from './Effect';
import Myvehicle from './Des';
import List from './List';
import Click from './Click';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deliver from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Header/> 
   <Banner/>
   {/* <Gallery/> */}
   <Conditional/>
   <Use/>
   <Timer/>
   <Myvehicle/>
   <List/>
   <Click/>
   <Deliver/>
   </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
