import React, { FC } from 'react';
import './Dashboard.css';
import DashboardNavbar from '../../components/DashboardNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';

type Props = {};

const Dashboard: FC<Props> = (props: Props) => {
  return (
    <>
      <Router>
        <DashboardNavbar />
        <Switch>
          <Route path="/dashboard" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
