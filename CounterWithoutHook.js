import React, { useState } from 'react'
import { setTitle } from './actions';
export const Counter = ({ count, title, dispatch }) => {
    // Read the title state from the store
    const [tutorialTitle, setTutorialTitle] = useState('')
    const handleSetTitle = (event) => {
        console.log('Handle set title called', event)
        // Dispatching the title to the store
        console.log('dispatching title with the action', setTitle(title))
        dispatch(setTitle(tutorialTitle))
    }
    console.log('Dispatch inside of the Counter', dispatch);
    return (
        <main className="Counter">
            <h1>{title}</h1>
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={() => { }}>Increment</button>
                <button onClick={() => { }}>Reset</button>
                <button onClick={() => { }}>Decrement</button>
            </section>
            <section>
                <input type="text" placeholder="Set Title" value={tutorialTitle} onChange={(event) => setTutorialTitle(event.target.value)} /><br />
                <button type="button" onClick={event => handleSetTitle(event)}>Set Title</button>
            </section>
        </main>
    );
}