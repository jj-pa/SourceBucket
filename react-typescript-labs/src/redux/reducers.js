import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../utils/history';

// global reducers
import initval from './modules/initFormReducer';

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    initval,
    router: connectRouter(history),
    ...injectedReducers,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
