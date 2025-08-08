import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">Know Thyself, Be Happy</Link>
        <nav className="links">
          <NavLink to="/about-author">About the Author</NavLink>
          <NavLink to="/about-book">About the Book</NavLink>
          <NavLink to="/buy">Buy</NavLink>
          <NavLink to="/coaching">Coaching</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <Link to="/buy" className="btn small">Get the Book</Link>
      </div>
    </header>
  );
}
