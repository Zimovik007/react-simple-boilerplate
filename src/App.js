import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('World');
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName('James')}>
        Click me to change the name
      </button>
    </div>
  );
}

export default App;