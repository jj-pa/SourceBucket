import React, { FC, useState } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';
import LandingMenu from '../../components/LandingMenu';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import {
  homeObjOne,
  landingReact,
  homeObjThree,
} from '../../components/InfoSection/Data';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import Team from '../../components/Team';
// import { scrollFunction } from './Scroll';

type Props = {};

const Landing: FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  /*useEffect(() => {
    scrollFunction();
  }, []);*/

  return (
    <>
      <LandingMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...landingReact} />
      <Services />
      {/*<Team />*/}
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export { Landing };
