import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.25rem;
  font-size: 1.15rem;
  padding: 0.5rem;
  border-color: transparent;
  text-align: right;
  color: ${({ theme }) => theme.colors.darkPrimary};
  font-weight: 600;
  cursor: pointer;

  &.default-value {
    color: ${({ theme }) => theme.colors.greyCyan};
  }
`;

export default Input;
