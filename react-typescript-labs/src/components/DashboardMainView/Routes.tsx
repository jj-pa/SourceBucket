import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Destinations from './Destinations';
import Blog from './Blog';
import Services from './Services';
import Contacts from './Contacts';

type Props = {};

const Routes: FC<Props> = (props: Props) => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
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
  );
};

export default Routes;
