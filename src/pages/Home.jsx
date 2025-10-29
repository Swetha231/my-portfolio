export default function Home() {
  return (
    <section className="hero">
      <div className="grid two gap">
        <div>
          <h1>Swetha Sivakumar</h1>
          <p className="lead">
            Student-Athlete from Singapore studying at Yale University, interested in tech policy.
          </p>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/swetha.JPG`}
            alt="Swetha Sivakumar"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}
