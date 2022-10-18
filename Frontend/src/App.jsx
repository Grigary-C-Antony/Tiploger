import { useState } from "react";
import "./App.css";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row">
      <Leftside />
      <Rightside />
    </div>
  );
}

export default App;
