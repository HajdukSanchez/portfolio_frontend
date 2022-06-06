import React from 'react';

import { FaEnvelope } from 'react-icons/fa';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

import { LinkedInBadge } from '../';
import { Contact, Email, FooterContainer, Information, Socials } from './Footer.component.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Information>
        <h3>Take a look</h3>
        <p>See more about me</p>
        <LinkedInBadge />
      </Information>
      <Contact>
        <h4>&#64; 2022 Jozek Hajduk. All rights reserved</h4>
        <Email>
          <a href="">
            <FaEnvelope />
            <span>hajduksanchez.dev@gmail.com</span>
          </a>
        </Email>
        <Socials>
          <a href="https://twitter.com/HajdukJozek" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
          <a href="https://github.com/HajdukSanchez" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/jozek-hajduk/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </Socials>
      </Contact>
    </FooterContainer>
  );
};

export { Footer };
