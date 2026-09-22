import { put, takeEvery, call, all } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Our worker saga: will perform the async increment task
export function* incrementAsync() {
  //   yield delay(1000);
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// Our watcher saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* helloSaga() {
  console.log("Hello sagas!");
}

// Single entry point to start all sagas at once
/*
This saga yields an array with the results of calling our two sagas, helloSaga and watchIncrementAsync.
This means the two resulting Generators will be started in parallel. 
Now we only have to invoke sagaMiddleware.run on the root saga in main.js
*/
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
