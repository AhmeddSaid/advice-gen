import { useState, useEffect } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Advice Generator</h1>
      <p className="advice">{advice}</p>
      <button className="button" onClick={getAdvice}>
        Get Advice
      </button>
      <p className="count">You Generated {count} Advices</p>
    </div>
  );
};

export default App;
