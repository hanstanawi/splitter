import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem;
  border-color: transparent;

  &:hover {
    /* border: solid; */
    border-top: ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;
