import React from 'react';
import logo from 'assets/images/logo.svg';
import styled from 'styled-components';

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    width: 100%;
  }
`;

export default function HeaderTitle() {
  return (
    <StyledTitle>
      <img src={logo} alt="logo" />
    </StyledTitle>
  );
}
