import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <div className="grid two gap">
        <div>
          <h1>Know Thyself, <span className="muted-strong">Be Happy</span></h1>
          <p className="lead">
            A practical guide to self-knowledge and lasting contentment.
            Explore the book, book coaching, and read the latest posts.
          </p>
          <div className="row gap">
            <Link className="btn" to="/buy">Buy the Book</Link>
            <Link className="btn outline" to="/coaching">Book Coaching</Link>
          </div>
          <div className="tiny muted mt">Formats: Paperback · eBook · Audiobook</div>
        </div>
        <div className="bookcard">
          <div className="sun">☀️</div>
          <p className="muted center">“Happiness is our nature — we simply remove what hides it.”</p>
        </div>
      </div>
    </section>
  );
}
