import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { answerAnim } from '../animation';

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      className="question"
      role="button"
      tabIndex={0}
      onClick={() => setToggle(!toggle)}
      onKeyPress={() => setToggle(!toggle)}
      layout
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle && (
        <motion.div variants={answerAnim} initial="hidden" animate="show">
          {children}
        </motion.div>
      )}
      <div className="faq-line" />
    </motion.div>
  );
};

export default Toggle;
