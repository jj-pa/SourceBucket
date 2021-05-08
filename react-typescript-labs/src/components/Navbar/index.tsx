import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';
import { Search } from '../../containers/Search/Search';
import { Home } from '../../containers/Home/Home';

type Props = {};

const Navbar: FC<Props> = (props: Props) => {
  return (
    <Router>
      <Nav>
        <NavLink to="/">
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
      </Switch>
    </Router>
  );
};

export default Navbar;
