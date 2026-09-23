import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, set } from "./actions";
import { SetCounter } from "./SetCounter";

export const Counter = () => {
    const incident = 'Incident';
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    return (
        <main className="Counter">
            <h1>Days Since Last {incident}</h1>
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(set(0))}>Reset</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </section>
            <SetCounter />
        </main>
    );
};

export default Counter;
