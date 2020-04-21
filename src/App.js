import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import useRequest from "./hooks/useRequest";

function App() {

  const { isLoading, initialCount } = useRequest();

  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading ? <div class="loader" /> : <Counter initialCount={initialCount} />
        }
      </header>
    </div>
  );
}

export default App;
