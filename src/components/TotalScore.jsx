import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <div>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
 max-width: 200px;
 text-align: center;
 margin-left: -200px;
  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 300;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
