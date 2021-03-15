import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import classNames from 'classnames';
import Scrollspy from 'react-scrollspy';

import SideNavMobile from './SideNavMobile';
import styles from './landingStyle-jss';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

class LandingHeader extends React.Component {
  state = {
    open: false,
    menuList: [
      createData('feature', '#feature'),
      createData('showcase', '#showcase'),
      createData('technology', '#tech'),
      createData('contact', '#contact'),
    ],
  };

  toggleDrawerOpen = () => {
    this.setState({ open: true });
  };

  toggleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { menuList, open } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        <Hidden lgUp>
          <SwipeableDrawer
            onClose={this.toggleDrawerClose}
            onOpen={this.toggleDrawerOpen}
            open={open}
            anchor="left"
          >
            <SideNavMobile
              menuList={menuList}
              closeDrawer={this.toggleDrawerClose}
            />
          </SwipeableDrawer>
        </Hidden>
        <AppBar className={classNames(classes.header, classes.solid)}>
          <Hidden lgUp>
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={this.toggleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.container}>
            <div className={classes.spaceContainer}>
              <nav>
                <Scrollspy items={['banner']}>
                  <a href="#banner" className={classes.brand}>
                    hello labs
                  </a>
                </Scrollspy>
                <Hidden mdDown>
                  <Scrollspy
                    items={['feature', 'showcase', 'tech', 'contact']}
                    currentClassName="active"
                  >
                    {menuList.map((item) => (
                      <li key={item.id.toString()}>
                        <Button href={item.url}>{[item.name]}</Button>
                      </li>
                    ))}
                  </Scrollspy>
                </Hidden>
              </nav>
              <Hidden mdDown>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to="/"
                  >
                    register
                  </Button>
                  <Button
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to="/login"
                  >
                    login
                  </Button>
                </div>
              </Hidden>
            </div>
          </div>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LandingHeader);
