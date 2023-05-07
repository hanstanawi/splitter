import { useAtom } from 'jotai';
import { tipAtom } from 'store';
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
  font-size: 1.15rem;
  padding: 0.5rem 0;
  border-radius: 0.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;

type TipPercentageCardProps = {
  value: number;
};

function TipPercentageButton({ value }: TipPercentageCardProps) {
  const [tip, setTip] = useAtom(tipAtom);

  const selected = tip === value;

  return (
    <StyledTipPercentageButton
      selected={selected}
      type="button"
      onClick={() => setTip(value)}
    >
      <span>{`${value}%`}</span>
    </StyledTipPercentageButton>
  );
}

export default TipPercentageButton;
