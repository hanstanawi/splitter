import { useContextDispatch, useTip } from 'hooks/calculator.hooks';
import styled from 'styled-components';

type StyledTipPercentageButtonProps = {
  selected: boolean;
};

export const StyledTipPercentageButton = styled.button<StyledTipPercentageButtonProps>`
  background-color: ${({ theme, selected }) => {
    return selected ? theme.colors.primary : theme.colors.darkPrimary;
  }};
  color: ${({ theme, selected }) => {
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

type TipPercentageCardProps = {
  value: number;
};

function TipPercentageButton({ value }: TipPercentageCardProps) {
  const dispatch = useContextDispatch();
  const currentTip = useTip();

  const selected = currentTip === value;

  const selectTipHandler = () => {
    dispatch({ type: 'SET_TIP_PERCENTAGE', payload: value });
  };

  return (
    <StyledTipPercentageButton
      selected={selected}
      type="button"
      onClick={selectTipHandler}
    >
      <p>{`${value}%`}</p>
    </StyledTipPercentageButton>
  );
}

export default TipPercentageButton;
