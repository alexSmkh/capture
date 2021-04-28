/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';
import movieState from '../movieState';

const Award = ({ title, description }) => (
  <StyledAward>
    <h3>{title}</h3>
    <div className="line" />
    <p>{description}</p>
  </StyledAward>
);

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(movieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.find((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [url, movie]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
      ;
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
  margin-top: 10vh;

  @media (max-width: 1300px) {
    padding: 1rem;
  }
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 1300px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 3rem;
      width: 100%;
      text-align: center;
    }
  }
`;

const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  margin: 2rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-direction: column;

    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
    margin: 5rem 5rem;
  }
`;

const StyledAward = styled.div`
  padding: 5rem 3rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }

  @media (max-width: 800px) {
    padding: 3rem;
  }

  @media (max-width: 630px) {
    padding: 1rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 85vh;
    /* margin-top: 1rem; */
    object-fit: cover;
  }
`;

export default MovieDetail;
