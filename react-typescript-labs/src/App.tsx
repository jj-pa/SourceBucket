import React from 'react';
import { Provider } from 'react-redux';
import { ApplicationState, configureAppStore } from './store';
import { Navigator } from './navigator/Navigator';
import { searchInitialState } from './containers/Search/reducer';

const initialState: ApplicationState = {
  // ... initial state of each chunk/feature
  search: searchInitialState,
};

const store = configureAppStore(initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
