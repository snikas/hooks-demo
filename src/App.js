import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import counterService from "./services/countService";

function App() {
  const [initialCount, setInitialCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await counterService();
      setInitialCount(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={initialCount} />
      </header>
    </div>
  );
}

export default App;
