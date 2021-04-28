import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  z-index: 2;
  margin-top: 10vh;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    padding: 0;

    h2 {
      font-size: 3rem;
    }

    button {
      margin: 0rem 0rem 2rem;
    }

    .title {
      padding: 1rem 0;
    }
  }

  @media (max-width: 550px) {
    padding: 0;

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      font-size: 1rem;
    }
  }

  @media (max-width: 440px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 2rem 0;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 1450px) {
    img {
      height: 60vh;
    }
  }

  @media (max-width: 650px) {
    img {
      height: 60vh;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 50vh;
    }
  }

  @media (max-width: 400px) {
    img {
      height: 40vh;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
