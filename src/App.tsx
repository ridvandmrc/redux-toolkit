import React, { useRef } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useCounter, increase, decrease } from "./store/counter/counter.slice";
import { selectList, addList, removeList } from "./store/list/list.slice";

function App() {
  const counter = useSelector(useCounter);
  const dispatch = useDispatch();
  const list = useSelector<string[]>(selectList);
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <>
      <div>
        <h1>Counter: {counter} </h1>
      </div>
      <button onClick={() => dispatch(increase(2))}> + </button>
      <button onClick={() => dispatch(decrease(2))}> - </button>

      <input ref={inputRef} />
      <button onClick={() => dispatch(addList(inputRef.current?.value))}>
        Add
      </button>

      <div
        style={{
          width: "250px",
          minHeight: "250px",
          border: "1px solid gray",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        {(list as string[]).map((item, index) => (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeList(index))}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
