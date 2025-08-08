import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutAuthor from './pages/AboutAuthor';
import AboutBook from './pages/AboutBook';
import Buy from './pages/Buy';
import Coaching from './pages/Coaching';
import Blog from './pages/Blog';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-author" element={<AboutAuthor />} />
          <Route path="/about-book" element={<AboutBook />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}