import styled from 'styled-components';
import { useAtom, useSetAtom } from 'jotai';
import { billAtom, peopleQtyAtom, resetValueAtom } from 'store';

type StyledResetButtonProps = {
  disabled: boolean;
};

const StyledResetButton = styled.button<StyledResetButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkPrimary};
  opacity: ${({ disabled }) => {
    return disabled ? '30%' : '100%';
  }};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => {
    return disabled ? 'auto' : 'pointer';
  }};
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  font-family: sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;

function ResetButton() {
  const [billValue] = useAtom(billAtom);
  const [peopleQuantity] = useAtom(peopleQtyAtom);
  const resetValues = useSetAtom(resetValueAtom);

  const isDefaultState = !billValue && !peopleQuantity;

  return (
    <StyledResetButton disabled={isDefaultState} onClick={() => resetValues()}>
      RESET
    </StyledResetButton>
  );
}

export default ResetButton;
