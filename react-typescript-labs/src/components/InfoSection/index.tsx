import React, { FC } from 'react';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';
import { HtmlButton, ScrollButton } from '../ButtonElements';

type Props = {
  id: string;
  lightBg: boolean;
  imgStart: boolean;
  lightText: boolean;
  darkText: boolean;
  description: string;
  buttonLabel: string;
  buttonUrl?: string;
  img: any;
  alt: string;
  topLine: string;
  headLine: string;
  primary: boolean;
  dark: boolean;
  height?: number;
};

const InfoSection: FC<Props> = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  buttonUrl,
  img,
  alt,
  primary,
  dark,
  height,
}: Props) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper height={height}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {buttonUrl ? (
                    <HtmlButton
                      href={buttonUrl}
                      primary={primary ? 1 : 0}
                      dark={dark ? true : false}
                      target="_blank"
                    >
                      {buttonLabel}
                    </HtmlButton>
                  ) : (
                    <ScrollButton
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? true : false}
                    >
                      {buttonLabel}
                    </ScrollButton>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
