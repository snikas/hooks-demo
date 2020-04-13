import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [initialCount, setInitialCount ] = useState(0);

  useEffect(() => {
      setInitialCount(10);
      console.log('setting initial count....');
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
