import { useBillValue, useTip } from 'hooks/calculator.hooks';
import styled from 'styled-components';

const StyledResult = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  height: 100%;
  width: 50%;
  color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
`;

function Result() {
  const billValue = useBillValue();
  const tipValue = useTip();

  return (
    <StyledResult>
      <div>{billValue}</div>
      <div>{tipValue}</div>
    </StyledResult>
  );
}

export default Result;
