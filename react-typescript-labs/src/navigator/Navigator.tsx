import React, { FC } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Search } from '../containers/Search/Search';
import { Landing } from '../containers/Landing/Landing';
import SigninPage from '../containers/Signin/SigninPage';
import AppDashboard from '../containers/AppDashboard';
import About from '../components/DashboardMainView/About';
import Destinations from '../components/DashboardMainView/Destinations';
import Blog from '../components/DashboardMainView/Blog';
import Services from '../components/DashboardMainView/Services';
import Contacts from '../components/DashboardMainView/Contacts';
import Country from '../components/DashboardMainView/Destinations/Country/Country';

type Props = {};

const Navigator: FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/dashboard" component={AppDashboard} />
        <Route exact path="/dashboard/:menu" component={AppDashboard} />
      </Switch>
    </Router>
  );
};

export { Navigator };
