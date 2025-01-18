import { useSelector, useDispatch } from "react-redux";
import { addCounter, removeCounter } from "./counterSlice.js";
("@reduxjs/toolkit");

const Counter = () => {
  // Read the data from the store;
  const count = useSelector((state) => state.counter.value);
  // dispatch or change the value of the store by sending actions to store.
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h3 className="counter">counter</h3>
      <h1>{count}</h1>
      <button onClick={() => dispatch(addCounter())}>+</button>
      <button onClick={() => dispatch(removeCounter())}>-</button>
    </div>
  );
};

export default Counter;
