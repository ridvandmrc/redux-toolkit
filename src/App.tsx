import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useCounter, increase, decrease } from "./store/counter/counter.slice";
import { allStore } from "./store";

function App() {
  const counter = useSelector(useCounter);
  const dispatch = useDispatch();

  console.log("state: ", allStore.getState());

  return (
    <>
      <div>
        <h1>Counter: {counter} </h1>
      </div>
      <button onClick={() => dispatch(increase(2))}> + </button>
      <button onClick={() => dispatch(decrease(2))}> - </button>
    </>
  );
}

export default App;
