import styled from 'styled-components';

const StyledResetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkPrimary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
`;

function ResetButton() {
  return <StyledResetButton>Reset</StyledResetButton>;
}

export default ResetButton;
