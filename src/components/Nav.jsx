/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => (
  <StyledNav>
    <h1>
      <Link to="/" id="logo">
        Capture
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/">About US</Link>
      </li>
      <li>
        <Link to="/work">Our Works</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
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
  position: sticky;
  top: 0;
  z-index: 10;

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
