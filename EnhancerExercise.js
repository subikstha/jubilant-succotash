import { createStore } from "redux";

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

const store = createStore(countReducer, loggerEnhancer)
store.dispatch({ type: INCREMENT })
store.dispatch({ type: ADD, payload: 900 })