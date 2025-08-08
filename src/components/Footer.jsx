import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid three">
        <div>
          <div className="brand small">Know Thyself, Be Happy</div>
          <p className="muted">Guided meditations, practical inquiry, and coaching toward steady ease.</p>
        </div>
        <div>
          <div className="strong">Quick Links</div>
          <ul className="links-vert">
            <li><Link to="/about-author">About the Author</Link></li>
            <li><Link to="/about-book">About the Book</Link></li>
            <li><Link to="/buy">Buy the Book</Link></li>
            <li><Link to="/coaching">Coaching & Consulting</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="strong">Contact</div>
          <p>hello@example.com</p>
        </div>
      </div>
      <div className="tiny muted center mt">© {new Date().getFullYear()} Siva Venkateswaran. All rights reserved.</div>
    </footer>
  );
}
