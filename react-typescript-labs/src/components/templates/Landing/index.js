import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './appStyles-jss';
import LandingHeader from '../../../components/organisms/LandingHeader';

class LandingTemplate extends React.Component {
  state = {
    transform: 0,
  };

  componentDidMount = () => {
    // Scroll content to top
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    // const mainContent = document.getElementById('app');
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scroll = window.pageYOffset;
    this.setState({
      transform: scroll,
    });
  };

  render() {
    const { classes, children } = this.props;
    const { transform } = this.state;
    return (
      <div id="mainContent">
        <LandingHeader />
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(LandingTemplate);
