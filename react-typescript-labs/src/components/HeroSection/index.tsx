import React, { FC, useEffect, useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroElements';
import Video from '../../assets/videos/video.mp4';
import { ScrollButton } from '../ButtonElements';

type Props = {};

const HeroSection: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1 className="title sticky-elem">Memories and Records</HeroH1>
        <HeroP className="desc sticky-elem">
          This is a repository for storing various sources.
        </HeroP>
        <HeroBtnWrapper>
          <ScrollButton
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark={true}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="signup-btn sticky-elem"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ScrollButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
