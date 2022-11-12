import styled from 'styled-components';
import { StyledTipPercentageButton } from './TipPercentageButton';

const StyledCustomTip = styled.button`
  background-color: ${({ theme }) => {
    return selected ? theme.colors.primary : theme.colors.darkPrimary;
  }};
  color: ${({ theme }) => {
    return selected ? theme.colors.darkPrimary : theme.colors.white;
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
  return (
    <StyledTipPercentageButton type="button">
      <p>{`${value}%`}</p>
    </StyledTipPercentageButton>
  );
}

export default CustomTip;
