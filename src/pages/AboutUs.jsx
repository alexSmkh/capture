import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Faq from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => (
  <motion.div
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

export default AboutUs;
