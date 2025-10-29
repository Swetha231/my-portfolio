import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid three">
        <div>
          <div className="brand small">Swetha Sivakumar</div>
          <p className="muted">CS, AI, and Tech Policy Enthusiast</p>
        </div>
        <div>
          <div className="strong">Quick Links</div>
          <ul className="links">
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
          </ul>
        </div>
        <div>
          <div>Contact</div>
          <p>Email: swetha.sivakumar@yale.edu</p>
          <p>Phone: +1 (203) 676-8292</p>
          <p>
            <a href="https://www.linkedin.com/in/swetha-sivakumar-2b5a74349" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </p>
        </div>
      </div>
      <div className="tiny muted center mt">© {new Date().getFullYear()} Swetha Sivakumar. All rights reserved.</div>
    </footer>
  );
}
