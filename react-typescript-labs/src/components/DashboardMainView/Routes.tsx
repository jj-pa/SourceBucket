import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Destinations from './Destinations';
import Blog from './Blog';
import Services from './Services';
import Contacts from './Contacts';
import Country from './Destinations/Country/Country';

type Props = {};

const Routes: FC<Props> = (props: Props) => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/about" component={About} />
      <Route exact path="/dashboard/destinations" component={Destinations} />
      <Route
        exact
        path="/dashboard/destinations/:country"
        component={Country}
      />
      <Route exact path="/dashboard/blog" component={Blog} />
      <Route exact path="/dashboard/services" component={Services} />
      <Route exact path="/dashboard/contacts" component={Contacts} />
    </Switch>
  );
};

export default Routes;
