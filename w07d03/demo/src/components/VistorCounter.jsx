import { useState } from "react";

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prev) => { return prev + 1; })
    setCounter((prev) => { return prev + 1; })
    setCounter((prev) => { return prev + 1; })
  };

  return (
    <div>
      <h2>Number of Visitors: {counter}</h2>
      <button onClick={clickHandler}>Increment</button>

    </div>
  );
};

export default VisitorCounter;
