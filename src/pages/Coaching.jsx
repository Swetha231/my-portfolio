export default function Coaching() {
  return (
    <section className="section">
      <h2>Coaching & Consulting</h2>
      <div className="grid two gap">
        <div className="card">
          <h4>Clarity Session (30 min)</h4>
          <p className="muted">A focused conversation to unblock your next step.</p>
          <div className="row gap mt">
            <a className="btn" href="https://calendly.com/you/clarity">Schedule</a>
            <a className="btn outline" href="https://buy.stripe.com/your-link">Pay</a>
          </div>
        </div>
        <div className="card">
          <h4>Coaching Package (4 × 60 min)</h4>
          <p className="muted">Weekly guidance tailored to you.</p>
          <div className="row gap mt">
            <a className="btn" href="https://calendly.com/you/clarity">Schedule</a>
            <a className="btn outline" href="https://buy.stripe.com/your-link">Pay</a>
          </div>
        </div>
      </div>
    </section>
  );
}
