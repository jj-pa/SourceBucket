import styled from 'styled-components';

type Props = {};

type ContainerProps = {
  lightBg: boolean;
};

export const InfoContainer = styled.div<ContainerProps>`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
}
`;

type InfoWrapperProps = {
  height?: number;
};

export const InfoWrapper = styled.div<InfoWrapperProps>`
  display: grid;
  z-index: 1;
  height: ${({ height }) => (height ? `${height}px` : '860px')};
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

type RowProps = {
  imgStart: boolean;
};

export const InfoRow = styled.div<RowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div<Props>`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div<Props>`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div<Props>`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;
`;

export const TopLine = styled.p<Props>`
  color: #f9a826;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

type HeadingProps = {
  lightText: boolean;
};

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

type SubtitleProps = {
  darkText: boolean;
};

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div<Props>`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img<Props>`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
