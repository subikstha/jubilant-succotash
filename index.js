import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, dispatch, bindActionCreators } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import './EnhancerExercise.js'
import { Provider } from "react-redux";
import { store as otherStore } from "./store";
// import './CombineReducer.js'
// import './Enhancer.js'


import Counter from "./Counter";
import reducer from "./reducers";
import ClassCounter from "./ClassCounter.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////
const initialState = { value: 0 }
const INCREMENT = 'INCREMENT';
const ADD = 'ADD'

const incrementAction = { type: 'INCREMENT' }
const increment = () => ({ type: INCREMENT })
const add = (amount) => ({ type: ADD, payload: amount })


const anotherReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const value = state.value + 1;
      return { value }

    case ADD:
      return { value: state.value + action.payload }
    default:
      return state

  }
}


const anotherStore = createStore(anotherReducer)

const subscriber = () => console.log("SUBSCRIBER", anotherStore.getState());

const actions = bindActionCreators({ increment, add }, anotherStore.dispatch)

actions.add(1000)
actions.increment()

// console.log('new state', anotherStore.getState())


// console.log('Another store', anotherStore, anotherStore.getState())
//////////////////////////////////////////////////////////////////////////////////////////////////////

// const store = createStore(reducer);
// Create a middleware using the factory function "createSagaMiddleware"
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // This adds the sagaMiddleware to the Redux middleware pipeline
});

sagaMiddleware.run(rootSaga); // This starts the Saga system and tells it which saga(s) to run

const action = (type) => store.dispatch({ type });

const makeLouder = string => string.toUpperCase();
const repeatThree = string => string.repeat(3);
const embolden = string => string.bold();

const composed = compose(embolden, repeatThree, makeLouder);

// console.log('composed', composed('hello'))

function render() {
  ReactDOM.render(
    <Provider store={otherStore}>
      <ClassCounter />
      <Counter
        value={store.getState()}
        onIncrement={() => action("INCREMENT")}
        onDecrement={() => action("DECREMENT")}
        onIncrementAsync={() => action("INCREMENT_ASYNC")}
        onDecrementAsync={() => action("DECREMENT_ASYNC")}
      />
    </Provider>,
    document.getElementById("root"),
  );
}

render();
store.subscribe(render);

