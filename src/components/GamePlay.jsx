import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Score from "./Score";
import RollDice from "./RollDice";
import Button from "./Button";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not Selected any Number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };

  return (
    <Main>
      <div className="parent">
        <Score score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="over">
        <Button name="Reset" onClick={resetScore} />
        <Button
          onClick={() => {
            setshowRules((prev) => !prev);
          }}
          name={showRules ? "Hide Rules" : "Show Rules"}
        />
      </div>
      {showRules && <Rules />}
    </Main>
  );
};

export default GamePlay;

const Main = styled.div`
  .parent {
    display: flex;
    justify-content: space-around;
    padding-top: 70px;
  }
  .over {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding-top: 30px;
  }
`;
