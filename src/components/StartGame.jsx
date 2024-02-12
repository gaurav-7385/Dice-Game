import "./StartGame.css";
import Button from "./Button";
const StartGame = ({ toggle }) => {
  return (
    <div className="container">
      <img src="/image/dices.png" alt="dice"></img>
      <div>
        <h1>DICE GAME</h1>
        <Button onClick={toggle} name="Play Now" />
      </div>
    </div>
  );
};
export default StartGame;
