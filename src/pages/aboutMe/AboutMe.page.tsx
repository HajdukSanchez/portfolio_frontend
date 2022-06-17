import React, { useContext } from 'react';

import { IoRocket } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import { HiDownload } from 'react-icons/hi';
import { SiMinutemailer } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

import { Button, InfoTag } from '../../components';
import { AppContext } from '../../context/AppContext';
import { getImageURL, navigateOutside } from '../../helpers';
import { Card, Container, Image, Information, InfoTagList } from './AboutMe.page.style';

const AboutMePage = () => {
  const {
    user: { name, lastName, email, about, cellphone, gitHub, linkedIn, twitter, profession, username, cv, picture },
  } = useContext(AppContext);

  return (
    <Container>
      <Card>
        <Information>
          <h1>
            {name} {lastName}
          </h1>
          <h4>{profession}</h4>
          <ReactMarkdown transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.REACT_APP_BASE_STRAPI_URL}${uri}`)}>
            {about ?? ''}
          </ReactMarkdown>
          <InfoTagList>
            <InfoTag title={email} icon={<SiMinutemailer />} onClik={() => navigateOutside(`mailto:${email}` ?? '')} />
            <InfoTag title={`${cellphone}`} icon={<BsTelephoneFill />} onClik={() => navigateOutside(`tel:${cellphone}` ?? '')} />
            <InfoTag title={'GitHub'} icon={<BsGithub />} onClik={() => navigateOutside(gitHub ?? '')} />
            <InfoTag title={'LinkedIn'} icon={<BsLinkedin />} onClik={() => navigateOutside(linkedIn ?? '')} />
            <InfoTag title={'Twitter'} icon={<BsTwitter />} onClik={() => navigateOutside(twitter ?? '')} />
            <InfoTag title={username} icon={<IoRocket />} />
          </InfoTagList>
          <Button text="Download my CV" onClick={() => navigateOutside(cv ?? '')} icon={<HiDownload />} />
        </Information>
        <Image>{picture?.data?.attributes?.url && <img src={getImageURL(picture.data.attributes.url)} alt={name} />}</Image>
      </Card>
    </Container>
  );
};

export { AboutMePage };
