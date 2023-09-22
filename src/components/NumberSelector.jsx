import styled from "styled-components";

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler=(item)=>{
    setSelectedNumber(item)
    setError("")
  }

  // console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
    <div className="flex">
      {arrNumber.map((item, index) => (
        <Box
          isSelected={item == selectedNumber}
          key={index}
          onClick={()=>numberSelectorHandler(item)}
          >
          {item}
        </Box>
      ))}
    </div>
    <p>Select Number</p>
      </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover{
    cursor: pointer;
  }
`;
const NumberSelectorContainer = styled.div`
    margin-right: -200px;
    display: flex;
    flex-direction: column;
    align-items: end;
    /* margin-bottom: 12px; */

    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
      color: red;
    }`;
