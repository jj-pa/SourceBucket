import React, { FC, useState } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../../components/InfoSection/Data';
import test1 from '../../assets/images/svg-1.svg';
import test2 from '../../assets/images/svg-2.svg';
import test3 from '../../assets/images/svg-3.svg';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

type Props = {};

const Landing: FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} image={test1} />
      <InfoSection {...homeObjTwo} image={test2} />
      <Services />
      <InfoSection {...homeObjThree} image={test3} />
      <Footer />
    </>
  );
};

export { Landing };
