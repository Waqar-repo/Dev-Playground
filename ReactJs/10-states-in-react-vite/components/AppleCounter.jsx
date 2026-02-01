import Button from './Button';
import Applebasket from './Applebasket';
import { createRoot } from 'react-dom/client';
import './AppleCounter.css';
const LeftArrow = new URL('../assets/images/left-arrow.png', import.meta.url);
const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);



const root = createRoot(document.querySelector('#root'));


const TotalAppleCount = 10
let RightAppleCount = 0
let LeftAppleCount = TotalAppleCount - RightAppleCount

const AppleCounter = ({test}) => {

   
const leftArrowHandler  = () =>{
     if(RightAppleCount > 0){
            RightAppleCount --
    LeftAppleCount ++
    root.render(<AppleCounter />);
    }


}
const rightArrowCount = () =>{
    if(LeftAppleCount > 0){

        LeftAppleCount --
        RightAppleCount ++
        root.render(<AppleCounter />);
    
    }
    }

  return (
    <section onClick={test} >
      <Applebasket appleCount={LeftAppleCount} backetName="Basket 1" />
      <Button
        imageUrl={LeftArrow}
        titleText={'Left Arrow'}
        altText={'Left Arrow'}
        onClickHandler={leftArrowHandler}
      />
      <Button
        imageUrl={RightArrow}
        titleText={'Right Arrow'}
        altText={'Right Arrow'}
        onClickHandler={rightArrowCount}
      />
      <Applebasket appleCount={RightAppleCount} backetName="Basket 2" />
    </section>
  );
};
export default AppleCounter;


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