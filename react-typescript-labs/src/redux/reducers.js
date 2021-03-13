import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux';
import history from '../utils/history';

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
    router: connectRouter(history),
    ...injectedReducers,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
