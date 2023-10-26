import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-blue-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
