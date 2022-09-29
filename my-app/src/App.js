import React, { useCallback, useState } from "react";
import Message from "./Components/Message";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("app rendering");

  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {toggle ? "On" : "Off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message
        numberOfMessages={count}
        onHandleIncrement={handleIncrementMessage}
      />
    </div>
  );
};

export default App;
