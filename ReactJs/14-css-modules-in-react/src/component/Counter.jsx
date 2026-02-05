import { useState } from 'react';
import styles from '../component/Counter.module.css'

function Counter({Uname,children:AppleCounter}) {
  console.log(styles);
  const [count, setCount] = useState(0);
  const [name, setName] = useState(Uname);
// console.log(AppleCounter);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={styles.textXl}>{count}</h1>
      <h2>{name}</h2>
      <button
      className={[styles.button,styles.textXl].join(' ')}
        style={{ minWidth: 150, minHeight: 20 }}
        onClick={() => {
          setCount(count + 1);
          // setCount((pre)=> pre +1)
          setName('Waqar Ahmad');
        }}
      >
        Increase Count
      </button>
    {
      AppleCounter
    }
    </div>
  );
}
export default Counter
