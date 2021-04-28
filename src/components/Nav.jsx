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
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #282828;
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;

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

  @media (max-width: 1300px) {
    height: 10vh;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 0;

    #logo {
      display: inline-block;
      padding-bottom: 0.5rem;
    }

    ul {
      padding-bottom: 0.5rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding-left: 0;
      }
    }
  }

  @media (max-width: 440px) {
    ul {
      justify-content: space-around;
    }
  }
`;

export default Nav;
