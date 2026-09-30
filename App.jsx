import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Welcome to the Counter App</h1>
      <Counter title="My First Counter" />
    </div>
  );
}

function Counter({ title }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
