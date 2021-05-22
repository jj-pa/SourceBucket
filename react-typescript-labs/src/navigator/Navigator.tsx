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

type Props = {};

const Navigator: FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/dashboard" component={AppDashboard} />
        <Route path="/dashboard/about" component={About} />
        <Route path="/dashboard/destinations" component={Destinations} />
        <Route
          exact
          path="/dashboard/destinations/:county"
          component={Destinations}
        />
        <Route path="/dashboard/blog" component={Blog} />
        <Route path="/dashboard/services" component={Services} />
        <Route path="/dashboard/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};

export { Navigator };
