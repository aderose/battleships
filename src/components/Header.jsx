import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1em 10em;
  color: white;
  background-color: #222;
  margin-bottom: 2em;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-family: 'Anton';
  letter-spacing: 5px;
  font-size: 4em;
  text-transform: uppercase;
`;

const Logo = styled.img`
  filter: invert(100%) brightness(50%);
  transform: scaleX(-1);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  padding: 0.25em;
  width: 150px;
  margin-right: 2.5em;

  transition: filter 0.2s ease-out;

  :hover {
    filter: invert(100%) brightness(100%);
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo
        src="https://static.thenounproject.com/png/44759-200.png"
        alt="Logo"
      />
      <Title>Battleships</Title>
    </Nav>
  );
};

export default Header;
