import "./Styling.css";

function Scores({ scores }) {
  return (
    <section className="scores">
      <div>
        <span>Player Wins</span>
        <br />
        <span>{scores.x}</span>
      </div>
      <div>
        <span>Draws</span>
        <br />
        <span>{scores.tie}</span>
      </div>
      <div>
        <span>AI Wins</span>
        <br />
        <span>{scores.o}</span>
      </div>
    </section>
  );
}

export default Scores;
