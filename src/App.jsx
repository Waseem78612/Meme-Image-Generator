import { useState, useEffect } from "react"; // ← Import useEffect
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect Function is called");
  }, [count]);
  return (
    <>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        style={{ height: "120px", width: "120px" }}
      >
        Add
      </button>
      <h3>This Count is {count}</h3>
      <Header />
      <Main />
    </>
  );
}

export default App;
