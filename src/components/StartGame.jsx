import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" width={600} height={500} />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button
        onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
