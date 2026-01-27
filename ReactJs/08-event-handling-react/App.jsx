import AppleCounter from './components/AppleCounter';


const App = () => {
  return (
    <div>
      <AppleCounter test={()=>console.log('apple counter')} />
    </div>
  );
};

export default App;
