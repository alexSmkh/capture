/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Faq from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  useEffect(() => {
    // document.location.reload(true);
  }, []);

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <Faq />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
