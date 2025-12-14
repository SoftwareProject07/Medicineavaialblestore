import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Component/Login.jsx";
import Registeration from "./Component/Registeration.jsx";
import Header from "./Component/User/Header.jsx";
import Deshboard from "./Component/User/Deshboard.jsx";


      // ✅ relative path

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './Component/Contact.jsx/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/header" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/header" element={<Header />} />
        <Route path="/deshboard" element={<Deshboard />} />    
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
