import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';

import { About } from '../styles';
import Toggle from './Toggle';
import useScroll from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      initial="hidden"
      ref={element}
      animate={controls}
    >
      <h2>
        Any Questions&nbsp;
        <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
              dolor!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
              dolor!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
              dolor!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
              dolor!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .question:focus {
    outline: none;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
