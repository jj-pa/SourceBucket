import { combineReducers } from 'redux';
import { searchReducer } from './containers/Search/reducer';

const reducers = {
  // ...reducers
  search: searchReducer,
};

function createRootReducer() {
  const rootReducer = combineReducers({
    ...reducers,
  });

  return rootReducer;
}

export { createRootReducer };
