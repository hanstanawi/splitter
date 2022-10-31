import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  background-color: hsl(0, 0%, 100%);

  width: 75%;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  h1 {
    color: #000;
    font-size: 2rem;
    font-family: sans-serif;
  }
`;

function Container() {
  return (
    <StyledContainer>
      <h1>Hello</h1>
    </StyledContainer>
  );
}

export default Container;
