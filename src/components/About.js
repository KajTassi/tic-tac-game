import "./Styling.css";

function About() {
  return (
    <section className="about">
        <div>
            <p><u>To Reset</u>: Click the gameboard after a completed round to reset the board.</p>
            <br />
            <p><u>Hint</u>: The AI is beatable, and it's behavior will change based on it's probability of losing or winning.</p>
        </div>
    </section>
  );
}

export default About;