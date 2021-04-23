import React from 'react';
import { motion } from 'framer-motion';

import {
  About, Description, Hide, Image,
} from '../styles';
import Wave from './Wave';
import home1 from '../img/home1.png';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => (
  <About>
    <Description>
      <div className="title">
        <Hide>
          <motion.h2 variants={titleAnim}>We work to make</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>
            your&nbsp;
            <span>dreams</span>
            &nbsp;come
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>true.</motion.h2>
        </Hide>
      </div>
      <motion.p variants={fade}>
        Contact us for any photography or videography ideas that you have. We
        have professionals with amazing skills to help you achieve it.
      </motion.p>
      <motion.button type="button" variants={fade}>
        Contant Us
      </motion.button>
    </Description>
    <Image>
      <motion.img
        src={home1}
        variants={photoAnim}
        alt="photographer"
      />
    </Image>
    <Wave />
  </About>
);

export default AboutSection;
