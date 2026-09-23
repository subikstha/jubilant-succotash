import { createStore, applyMiddleware } from "redux";

const INCREMENT = 'Increment'
const ADD = 'ADD'

const initialState = {
    count: 0
}

function countReducer(state = initialState, action) {
    if (action.type == INCREMENT) {
        return { count: state.count + 1 }
    }

    if (action.type === ADD) {
        return { count: state.count + action.payload }
    }

    return state
}

const loggerEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const loggedReducer = (state, action) => {
        console.log('State Before', state, action);
        const newState = countReducer(state, action)
        console.log('State after', newState, action);

        return newState
    }

    return createStore(loggedReducer, initialState, enhancer)
}

// Here store is the actual store that we created
// next is the dispatch, since each piece of middleware will call the next piece of middleware in the array and you dispatch to the reducer once you reach the end of the array

const logMiddleware = store => next => action => {
    console.log('oldState in log middleware', store.getState(), action)
    next(action);
    console.log('new state in log middleware', store.getState(), action)
}

const monitorMiddleware = store => next => action => {
    const start = performance.now();
    next(action)
    const end = performance.now();
    console.log('Diff in monitor', end - start)
}

const store = createStore(countReducer, applyMiddleware(logMiddleware, monitorMiddleware))
store.dispatch({ type: INCREMENT })
store.dispatch({ type: ADD, payload: 900 })