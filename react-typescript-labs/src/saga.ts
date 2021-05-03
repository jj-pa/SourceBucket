import { all, fork } from 'redux-saga/effects';
import searchSaga from './containers/Search/saga';

function* rootSaga() {
  yield all([
    // fork(saga1), fork(saga2)
    fork(searchSaga),
  ]);
}

export { rootSaga };
