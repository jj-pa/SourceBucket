import React from 'react';
import { Provider } from 'react-redux';
import { ApplicationState, configureAppStore } from './store';
import { Navigator } from './navigator/Navigator';
import { searchInitialState } from './containers/Search/reducer';
import PrimeReact from 'primereact/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

PrimeReact.ripple = true;

const initialState: ApplicationState = {
  // ... initial state of each chunk/feature
  search: searchInitialState,
};

const store = configureAppStore(initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigator />
          {/*<Landing />*/}
        </Router>
      </Provider>
    );
  }
}

export default App;
