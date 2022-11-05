import { useBillValue } from 'hooks/calculator.hooks';
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

  return <StyledResult>{billValue}</StyledResult>;
}

export default Result;
