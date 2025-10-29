export default function Achievements() {
  return (
    <section className="section">
      <h2>Awards and Honours</h2>

      <div className="grid two gap">
        {/* Computer Science */}
        <div className="info-box">
          <div className="info-content">
            <h4>Computer Science</h4>
            <ul>
              <li>Research</li>
              <li>App</li>
              <li>Top in CS</li>
              <li>Member of Catalyst</li>
            </ul>
          </div>
        </div>

        {/* Athletics */}
        <div className="info-box">
          <div className="info-content">
            <h4>Athletics</h4>
            <ul>
              <li>Yale Varsity Squash Team</li>
              <li>Asian Top 8</li>
              <li>Singapore National Team</li>
            </ul>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/squash.jpg`}
            alt="Squash"
            className="info-image"
          />
        </div>

        {/* Others */}
        <div className="info-box">
          <div className="info-content">
            <h4>Others</h4>
            <ul>
              <li>Volunteering with Funbiotics</li>
              <li>Started the Yale Museum Club (hopefully)</li>
              <li>Awarded the Singapore Public Service Commission Scholarship</li>
              <li>Completed Singapore Basic Military Service</li>
            </ul>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/army.jpeg`}
            alt="Army"
            className="info-image"
          />
        </div>
      </div>
    </section>
  );
}
