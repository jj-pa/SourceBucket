import React, { FC } from 'react';
import {
  CloseIcon,
  Icon,
  LandingMenuContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  LandingMenuWrapper,
  SideBtnWrap,
} from './LandingMenuElements';

type Props = {
  isOpen: boolean;
  toggle: any;
};

const LandingMenu: FC<Props> = ({ isOpen, toggle }: Props) => {
  return (
    <LandingMenuContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LandingMenuWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </LandingMenuWrapper>
    </LandingMenuContainer>
  );
};

export default LandingMenu;
