import { put, takeEvery, call, all, takeLatest } from "redux-saga/effects";
import { decrement, DECREMENT } from "./actions";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Our worker saga: will perform the async increment task
export function* incrementAsync() {
  console.log('increment async generator called')
  //   yield delay(1000);
  yield call(delay, 1000); // Call means run this function and let Saga manage/wait for it
  yield put({ type: "INCREMENT" }); // Put means dispatch this action to Redux
}

export function* decrementAsync() {
  console.log('decrement async generator called')
  yield call(delay, 5000);
  yield put({ type: "DECREMENT" })
}

export function* watchDecrementAsync() {
  yield takeLatest("DECREMENT_ASYNC", decrementAsync)
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
  yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
