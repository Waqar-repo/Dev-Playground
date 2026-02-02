import AppleCounter from './component/AppleCounter';
import Counter from './component/Counter';

const App = () => {
  return (
    <div>
      <Counter Uname = 'Hina' > 
        <AppleCounter />
      </Counter>
      {/* <AppleCounter /> */}
    </div>
  );
};

export default App;
