import DigitalNomad from '../../assets/images/digital_nomad.svg';
import ReactIcon from '../../assets/images/react_icon.svg';
import ImageUploadIcon from '../../assets/images/image_upload.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'SourceBucket',
  headLine: '기록하는 습관',
  description:
    '항상 기록하는 습관을 들이자. ' +
    '배워야할 것이 많으니까. ' +
    '적어놓으면 다시 볼 수 있으니까~',
  buttonLabel: 'Get started',
  imgStart: false,
  img: DigitalNomad,
  alt: 'Digital Nomad',
  dark: true,
  primary: true,
  darkText: false,
};

export const landingReact = {
  id: 'discover',
  height: 600,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'SourceBucket',
  headLine: 'I ❤️ React',
  description:
    '이 사이트는 리액트로 개발되었습니다. ' +
    '가상 돔, 단방향 데이터 바인딩, JSX, 선언형 프로그래밍, 컴포넌트 기반의 특징을 가진 ' +
    '리액트로 개발하였습니다.',
  buttonLabel: 'Learn More',
  buttonUrl: 'https://reactjs.org/',
  imgStart: true,
  img: ReactIcon,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Service',
  headLine: 'SourceBucket을 시작하세요.',
  description:
    '지금 바로 SourceBucket에 가입하여 서비스를 이용해보세요. ' +
    '당장의 시작이 가장 큰 행동입니다. 나의 생각은 매우 소중한 자산입니다. ' +
    '다른 사람과 내 기록을 공유해요. 😁',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: ImageUploadIcon,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
