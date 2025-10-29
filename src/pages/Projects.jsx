export default function Projects() {
  return (
    <section className="section">
      <h2>My Projects</h2>

      <div className="project">
        <h3>Research Paper: PPO and Q-learning in OpenAI Gym</h3>
        <p>
          Comparing PPO and Q-Learning in the cartpole environment.  
        </p>

        {/* Embedded PDF viewer */}
        <div style={{ width: "100%", height: "90vh", marginTop: "20px" }}>
          <iframe
            src="/CSEE.pdf"
            width="100%"
            height="100%"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            title="PPO and Q-learning Paper"
          />
        </div>
      </div>
      {/* Project 2 */}
      <div className="project" style={{ marginTop: "60px" }}>
        <h3>Paper: Modelling bus arrivals with Poisson Distrbution </h3>
        <p>
          Mathematical modeling of bus arrival intervals using Poisson and
          arithmetic progression analysis to optimize scheduling.
        </p>

        {/* Embedded second PDF viewer */}
        <div style={{ width: "100%", height: "90vh", marginTop: "20px" }}>
          <iframe
            src="/Bus.pdf"
            width="100%"
            height="100%"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            title="Bus Modeling Paper"
          />
        </div>
      </div>
    </section>
  );
}
