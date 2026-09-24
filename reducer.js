import { DECREMENT, INCREMENT, SET, SET_TITLE } from "./actions"

export const initialState = {
    count: 200,
    title: 'Redux Saga Tutorial'
}

export const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === DECREMENT) {
        return { ...state, count: state.count - 1 }
    }
    if (action.type === SET) {
        return { ...state, count: parseInt(action.payload, 10) }
    }
    if (action.type === SET_TITLE) {
        return {
            ...state,
            title: action.payload
        }
    }

    return state
}