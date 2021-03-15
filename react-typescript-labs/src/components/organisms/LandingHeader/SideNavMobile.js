import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import classNames from 'classnames';
import Scrollspy from 'react-scrollspy';

import styles from './sidebar-jss';

class SideNavMobile extends React.Component {
  render() {
    const { classes, menuList, closeDrawer } = this.props;

    const getMenus = (menuArray) =>
      menuArray.map((item, index) => (
        <ListItem
          key={index.toString()}
          button
          className={classes.headCapital}
          href={item.url}
          onClick={closeDrawer}
        >
          <ListItemText
            classes={{ primary: classes.primary }}
            variant="inset"
            primary={item.name}
          />
        </ListItem>
      ));

    return (
      <div className={classes.drawerInnerMobile}>
        <div
          className={classNames(
            classes.menuContainer,
            classes.landingNav,
            classes.rounded
          )}
        >
          <div className={classes.brandBig}>
            <h3>Hello jeongjin</h3>
          </div>
          <List className={classes.dense} component="nav">
            <Scrollspy
              items={[
                'feature',
                'showcase',
                'testimonials',
                'tech',
                'pricing',
                'contact',
              ]}
              currentClassName={classes.active}
            >
              {getMenus(menuList)}
            </Scrollspy>
          </List>

          <Divider />

          <List className={classes.dense} component="nav">
            <ListItem
              button
              className={classes.headCapital}
              component={Link}
              to={link.register}
            >
              <ListItemText
                classes={{ primary: classes.highlightLink }}
                variant="inset"
                primary="Register"
              />
            </ListItem>
            <ListItem
              button
              className={classes.headCapital}
              component={Link}
              to={link.login}
            >
              <ListItemText
                classes={{ primary: classes.primary }}
                variant="inset"
                primary="Sign In"
              />
            </ListItem>
          </List>
          <Typography variant="caption" className={classes.copyright}>
            &copy; 2021 labs
            <br />
            All Right Reserved
          </Typography>
        </div>
      </div>
    );
  }
}

export default SideNavMobile;
