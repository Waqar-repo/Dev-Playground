import { useState } from 'react';

function App({Uname}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(Uname);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        style={{ width: 150, height: 20 }}
        onClick={() => {
          setCount(count + 1);
          setName('Waqar Ahmad');
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
export default App;
