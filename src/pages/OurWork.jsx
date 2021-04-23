import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => (
  <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
    <Movie>
      <h2>The Athlete</h2>
      <div className="line" />
      <Link to="/work/the-athlete">
        <img src={athlete} alt="athlete" />
      </Link>
    </Movie>
    <Movie>
      <h2>The racer</h2>
      <div className="line" />
      <Link to="/work/the-racer">
        <img src={theracer} alt="theracer" />
      </Link>
    </Movie>
    <Movie>
      <h2>Good Times</h2>
      <div className="line" />
      <Link to="/work/good-times">
        <img src={goodtimes} alt="goodtimes" />
      </Link>
    </Movie>
  </Work>
);

const Work = styled(motion.div)`
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
