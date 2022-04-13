import React from 'react'
import {BrowserRouter as Router  } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';


function App() {
 

  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
