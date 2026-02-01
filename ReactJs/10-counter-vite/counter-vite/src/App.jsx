import { useState } from 'react';
let count1 = 1
function App() {
  const [count, setCount] = useState(0);
  // const[name,setName] = useState('Waqar')
  const state = useState('waqar')
  
  console.log(state);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <h2>{state[0]}</h2>
      <button
        style={{ width: 150, height: 20 }}
        onClick={() => {
          
          count1++
          setCount(count + 1);
          setCount((previousState)=> previousState + 1)
          setCount(count + 1);
          state[1]('waqar ahmad' + count1)
        
          
          
          
         
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
export default App;
