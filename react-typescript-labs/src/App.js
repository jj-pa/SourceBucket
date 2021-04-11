import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    );
  }
}

export default App;
