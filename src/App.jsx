import { useState, useEffect } from "react";
import Message from "./Message";

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
    <>
      <Message advice={advice} count={count} getAdvice={getAdvice} />
    </>
  );
};

export default App;
