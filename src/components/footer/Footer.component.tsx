import React, { useContext } from 'react';

import { FaEnvelope } from 'react-icons/fa';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

import { LinkedInBadge } from '../';
import { AppContext } from '../../context/AppContext';
import { Contact, Email, FooterContainer, Information, Socials } from './Footer.component.styles';

const Footer = () => {
  const {
    user: { email, linkedIn, gitHub, twitter, username },
  } = useContext(AppContext);
  const year: number = new Date().getFullYear(); // Get current year

  return (
    <FooterContainer>
      <Information>
        <h3>Take a look</h3>
        <p>See more about me</p>
        <LinkedInBadge />
      </Information>
      <Contact>
        <h4>
          &#64; {year} {username}. All rights reserved
        </h4>
        <Email>
          <a href={`mailto:${email}`}>
            <FaEnvelope />
            <span>{email}</span>
          </a>
        </Email>
        <Socials>
          <a href={twitter} target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
          <a href={gitHub} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </Socials>
      </Contact>
    </FooterContainer>
  );
};

export { Footer };
