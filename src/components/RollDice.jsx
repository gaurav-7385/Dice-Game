import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/image/Dice/dice_${currentDice}.png`} alt="dice1"></img>
        <p>Click on Dice to Roll</p>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
