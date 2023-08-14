import "./Styling.css";

function Scores({ scores }) {
  return (
    <section className="scores">
      <div>
        <span>Player</span>
        <br />
        <span>{scores.x}</span>
      </div>
      <div>
        <span>Tie</span>
        <br />
        <span>{scores.tie}</span>
      </div>
      <div>
        <span>Computer</span>
        <br />
        <span>{scores.o}</span>
      </div>
    </section>
  );
}

export default Scores;
