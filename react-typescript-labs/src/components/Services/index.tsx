import React, { FC } from 'react';
import CodingSVG from '../../assets/images/coding.svg';
import WorkingSVG from '../../assets/images/working.svg';
import ControlPanelSVG from '../../assets/images/control_panel.svg';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements';

type Props = {};

const Services: FC<Props> = (props: Props) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={CodingSVG} />
          <ServicesH2>Development</ServicesH2>
          <ServicesP>
            프론트엔드, 백엔드, 데이터 처리 등 개발에 사용한 소스들을 관리. 유사
            기능을 개발할 때 빠른 서치.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={WorkingSVG} />
          <ServicesH2>Blogging</ServicesH2>
          <ServicesP>
            개발 외에도 여러 정보들을 기록하여 나만의 데이터 버킷 관리. 맛집,
            여행, 일기 등.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={ControlPanelSVG} />
          <ServicesH2>Dashboard</ServicesH2>
          <ServicesP>
            기능과 디자인에 대해 항상 고민하고 지속적 개선을 추구하는 대시보드
            서비스.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
