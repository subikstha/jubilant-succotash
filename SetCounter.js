import React from 'react'
import { useDispatch } from 'react-redux';
import { set } from './actions';
export const SetCounter = () => {
    const dispatch = useDispatch();
    return (
        <section className="controls">
            <form
                onSubmit={(event) => {
                    const formData = new FormData(event.currentTarget)

                    const count = formData.get('count');
                    console.log('formdata, count', formData, count)
                    event.preventDefault();
                    dispatch(set(count))
                }}
            >
                <label htmlFor="set-to">Set Count</label>
                <input id="set-to" type="number" name="count" />
                <input type="submit" />
            </form>
        </section>
    );
};
