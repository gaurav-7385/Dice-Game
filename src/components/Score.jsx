import "./Score.css";
const Score = ({ score }) => {
  return (
    <div className="main">
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
};

export default Score;
