export default function Buy() {
  return (
    <section className="section">
      <h2>Buy the Book</h2>
      <div className="grid three gap">
        <div className="card">
          <h4>Direct Checkout</h4>
          <p className="muted">Secure payment via Stripe.</p>
          <a className="btn mt" href="https://buy.stripe.com/your-link">Buy Now</a>
        </div>
        <div className="card">
          <h4>Amazon / Retailers</h4>
          <p className="muted">Prefer a store? Use this link hub.</p>
          <a className="btn mt" href="https://example.com/retailers">View Retailers</a>
        </div>
        <div className="card">
          <h4>Audiobook</h4>
          <p className="muted">Narrated meditations + full book audio.</p>
          <a className="btn mt" href="#">Listen Samples</a>
        </div>
      </div>
    </section>
  );
}
