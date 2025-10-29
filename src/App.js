import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}