import AppleCounter from './components/AppleCounter';


const App = () => {
  return (
    <div>
      <AppleCounter test={()=>console.log('apple counter')} />
    </div>
  );
};

export default App;



//Artile what I have learned and understand

/*

Event Handling

Event handling in React JS is different.You have to add event listener on html tag  (div, button etc) not on react component.
For example, we have a component name button and inside that component, returns a button tag. A dev can add event listener
onClick = {propname} on html tag and pass that prop  in function expression parameter as de-structuring element.
const Button = ({ propname }) =>
    { return <button onClick={ propname }></button> }
Now just imagine we are importing this component to main app.
On main app, when you return react component write propname and pass function with logic that you want to execute.

Const App = ()=>{
<return button  propname={()=> logic }/>
}

It is kind of confusing when you just came from vanilla JS but it makes a lot easier. 



*/