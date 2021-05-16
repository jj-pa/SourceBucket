import React, { FC } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Search } from '../containers/Search/Search';
import { Landing } from '../containers/Landing/Landing';
import SigninPage from '../containers/Signin/SigninPage';
import Dashboard from '../containers/Dashboard';

type Props = {};

const Navigator: FC<Props> = () => {
  return (
    <Router>
      <Switch>
        {/*<Route path="/" render={() => <div>Hello jeongjin</div>} exact />*/}
        <Route path="/" component={Landing} exact />
        <Route path="/search" component={Search} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export { Navigator };
