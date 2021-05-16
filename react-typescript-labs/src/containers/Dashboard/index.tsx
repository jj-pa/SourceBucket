import React, { FC } from 'react';
import './Dashboard.css';
import DashboardNavbar from '../../components/DashboardNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from '../Landing/Landing';

type Props = {};

const Dashboard: FC<Props> = (props: Props) => {
  return (
    <>
      <Router>
        <DashboardNavbar />
        <Switch>
          <Route path="/dashboard" render={() => <h1>hello</h1>} exact />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
