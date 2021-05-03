import { combineReducers } from 'redux';

const reducers = {
  // ...reducers
};

function createRootReducer() {
  const rootReducer = combineReducers({
    ...reducers,
  });

  return rootReducer;
}

export { createRootReducer };
