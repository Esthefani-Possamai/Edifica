import React from 'react';
import style from './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Projetos from './components/pages/Projetos'
import Contato from './components/pages/Contato'
import Project from './components/pages/Project';
import { BackImg } from './components/Style.js'
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <BackImg>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Projetos" element={<Projetos/>} />
            <Route path="/Contato" element={<Contato/>} />
            <Route path="/NewProject" element={<NewProject/>} />
            <Route path="/project/:id" element={<Project/>} />
          </Routes>
        </main>
        <Footer />
      </BackImg>
    </Router>
  );
}

export default App;
