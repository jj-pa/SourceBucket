import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavMenu,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Search } from '../../containers/Search/Search';
import { Home } from '../../containers/Home/Home';

type Props = {
  toggle: any;
};

const Navbar: FC<Props> = ({ toggle }: Props) => {
  return (
    <Router>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">jeongjin</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
        {/*<NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">App</NavBtnLink>
        </NavBtn>
      </Nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Search} />
      </Switch>*/}
      </Nav>
    </Router>
  );
};

export default Navbar;
