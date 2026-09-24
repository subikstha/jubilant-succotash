import React from "react";
import { PropTypes } from "prop-types";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrementAsync}>Decrement after 5s</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired
};

export default Counter;
