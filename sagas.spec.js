import test from "tape";

import { put, call } from "redux-saga/effects";
import { incrementAsync, delay } from "./sagas";

test("increment async saga test", (assert) => {
  const gen = incrementAsync();
  // IncrementAsync is a generator function, when run, it returns an iterator object,
  // and the iterator's next method returns an object with the following shape
  gen.next(); // => {done: boolean, value: any}
  // The value field contains the yielded expression, ie the result of the expression after the yield
  // The done field indicates if the generator has terminated or if there are still some more 'yield' expressions
  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync Saga must call delay(1000)",
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "incrementAsync Saga must dispatch an INCREMENT action",
  );

  assert.deepEqual(
    gen.next().value,
    { done: true, value: undefined },
    "incrementAsync saga must be done",
  );

  assert.end();
});
