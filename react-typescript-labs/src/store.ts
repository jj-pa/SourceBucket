import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { createRootReducer } from './reducer';
import { rootSaga } from './saga';

import { SearchState } from './containers/Search/types';

export type ApplicationState = {
  // will hold state for each chunk/feature
  search: SearchState;
};

function configureAppStore(initialState: ApplicationState) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const { run: runSaga } = sagaMiddleware;

  // sagaMiddleware: Makes redux saga works
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: createRootReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createRootReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  sagaMiddleware.run(rootSaga);
  return store;
}

export { configureAppStore };
