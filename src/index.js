import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vw_Privacidad from './layout/Onbording';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

ReactDom.render(
  <Router>
    <Routes>
      <Route path="/" element={<Vw_Privacidad />} />
    </Routes>
  </Router>,
  document.getElementById('z')
);
