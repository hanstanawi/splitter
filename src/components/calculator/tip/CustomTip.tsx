import styled from 'styled-components';

const StyledCustomTip = styled.input`
  background-color: ${({ theme }) => {
    return theme.colors.lightGrey;
  }};
  color: ${({ theme }) => {
    return theme.colors.primary;
  }};
  width: 100%;
  height: 100%;
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

function CustomTip() {
  return <StyledCustomTip placeholder="Custom" />;
}

export default CustomTip;
