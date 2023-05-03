import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", value: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button style={{ margin: "1rem" }} onClick={incrementCounter}>
          Increment
        </button>
        <button style={{ margin: "1rem" }} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={increaseHandler}>Increase by 10</button>
    </main>
  );
};

export default Counter;
