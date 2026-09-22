import { combineReducers, createStore } from "redux";

const initialState = {
    users: [
        { id: 1, name: "Steve" },
        { id: 2, name: "Eric" }
    ],
    tasks: [
        { title: "File the TPS reports" },
        { title: "Order more energy drinks" }
    ]
}

const ADD_USER = "ADD_USER"
const ADD_TASK = "ADD_TASK"

// Action creators
const addTask = (title) => ({ type: ADD_TASK, payload: title })
const addUser = (name) => ({ type: ADD_USER, payload: name })

const userReducer = (users = initialState.users, action) => {
    if (action.type === ADD_USER) {
        return [...users, action.payload]
    }
    return users
}

const taskReducer = (tasks = initialState.tasks, action) => {
    if (action.type === ADD_TASK) {
        return [...tasks, action.payload]
    }
    return tasks
}

// Reducer
// This is saying users part of the tree is gonna use userReducer
// the tasks part of the tree is gonna use the taskReducer
const reducer = combineReducers({ users: userReducer, tasks: taskReducer })

// Store
const store = createStore(reducer)
console.log('This is the store from combine reducer', store);
console.log('combine Reducer initial State', store.getState())
