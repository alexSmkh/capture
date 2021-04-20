/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <StyledNav>
    <h1>
      <a href="#" id="logo">
        Capture
      </a>
    </h1>
    <ul>
      <li>
        <a href="#">About US</a>
      </li>
      <li>
        <a href="#">Our Works</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  </StyledNav>
);

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #282828;

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      padding-left: 10rem;
      position: relative;
    }
  }

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;  
  }
`;

export default Nav;
