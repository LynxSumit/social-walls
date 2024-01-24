import React from 'react';
import './App.css';
import '@fontsource/inter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Chatbot from './Chatbot2';
// import Chat
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/chatbot'  element={<Chatbot/>}/>
    </Routes>
    <ToastContainer/>
   </BrowserRouter>
  );
}

export default App;
