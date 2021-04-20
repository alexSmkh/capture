import React from 'react';

import {
  About, Description, Hide, Image,
} from '../styles';
import home1 from '../img/home1.png';

const AboutSection = () => (
  <About>
    <Description>
      <div className="title">
        <Hide>
          <h2>We work to make</h2>
        </Hide>
        <Hide>
          <h2>
            your&nbsp;
            <span>dreams</span>
            &nbsp;come
          </h2>
        </Hide>
        <Hide>
          <h2>true.</h2>
        </Hide>
      </div>
      <p>
        Contact us for any photography or videography ideas that you have. We
        have professionals with amazing skills to help you achieve it.
      </p>
      <button type="button">Contant Us</button>
    </Description>
    <Image>
      <img src={home1} alt="photographer" />
    </Image>
  </About>
);

export default AboutSection;
