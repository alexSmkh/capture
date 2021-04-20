import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => (
  <Work>
    <Movie>
      <h2>The Athlete</h2>
      <div className="line" />
      <Link to="/">
        <img src={athlete} alt="athlete" />
      </Link>
    </Movie>
    <Movie>
      <h2>The racer</h2>
      <div className="line" />
      <Link to="/">
        <img src={theracer} alt="theracer" />
      </Link>
    </Movie>
    <Movie>
      <h2>Good Times</h2>
      <div className="line" />
      <Link to="/">
        <img src={goodtimes} alt="goodtimes" />
      </Link>
    </Movie>
  </Work>
);

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default OurWork;
