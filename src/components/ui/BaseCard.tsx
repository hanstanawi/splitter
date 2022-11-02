import { ReactNode } from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.7rem;
  width: 50rem;
  height: 25rem;
  display: flex;
  box-shadow: 10px;
`;

type BaseCardProps = {
  children: ReactNode;
};

export default function BaseCard({ children }: BaseCardProps) {
  return <Card>{children}</Card>;
}
