import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import {
  pageAnimation, titleAnim, lineAnim, iconAnim,
} from '../animation';
import ScrollTop from '../components/ScrollTop';

import twitterLogo from '../img/twitter-logo.svg';
import fbLogo from '../img/facebook-logo.svg';
import gmailLogo from '../img/gmail-logo.svg';
import photographer from '../img/photographer.jpg';

function ContactUs() {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Line variants={lineAnim} />
      <div className="contacts">
        <Hide>
          <Social>
            <Circle variants={iconAnim}>
              <Icon src={gmailLogo} alt="gmail-logo" />
            </Circle>
            <Link variants={titleAnim} href="https://gmail.com" target="_blank">
              Send Us An Email
            </Link>
          </Social>
        </Hide>
        <Hide>
          <Social>
            <Circle variants={iconAnim}>
              <Icon src={fbLogo} alt="facebook-logo" />
            </Circle>
            <Link
              variants={titleAnim}
              href="https://facebook.com"
              target="_blank"
            >
              Facebook
            </Link>
          </Social>
        </Hide>
        <Hide>
          <Social>
            <Circle variants={iconAnim}>
              <Icon src={twitterLogo} alt="twitter-logo" />
            </Circle>
            <Link
              variants={titleAnim}
              href="https://twitter.com"
              target="_blank"
            >
              Twitter
            </Link>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
}

const StyledContact = styled(motion.div)`
  margin-top: 10vh;
  padding: 5rem 10rem;
  color: white;
  height: 90vh;
  background-image: url(${photographer});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;

  @media (max-width: 1300px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  
    h2 {
      font-size: 3rem;
    }
  }

`;

const Hide = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin-right: 1rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

const Icon = styled.img`
  height: 7rem;
  width: 7rem;
  margin: auto;
`;

const Line = styled(motion.div)`
  height: 0.5rem;
  background-color: #23d997;
  margin-bottom: 3rem;
  max-width: 50%;

  @media (max-width: 1300px) {
    max-width: 70%;
    margin-bottom: 2rem; 
  }
`;

const Link = styled(motion.a)`
  text-decoration: none;
  font-size: 4rem;
  color: white;

  @media (max-width: 1300px) {
    font-size: 2rem;
  }
`;
export default ContactUs;
