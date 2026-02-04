import AppleCounter from './component/AppleCounter';
import Counter from './component/Counter';

const App = () => {
  return (
    <div>
    {false ? <Counter Uname = 'Hina'  > </Counter> : <AppleCounter />  }
      
    </div>
  );
};

export default App;
