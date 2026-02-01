import Button from './Button';
import Applebasket from './Applebasket';
import './AppleCounter.css';

import { useState } from 'react';

const LeftArrow = new URL('../assets/images/left-arrow.png', import.meta.url);
const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);

// let rightApple = 0;





const AppleCounter = () => {
  const totalApple = 10;
  
  const [rightApple,setRightAppleCount]= useState(0)
  const [leftApple,setLeftAppleCount] = useState( totalApple)

  const leftArrowHandler = () => {
    if (rightApple > 0) {
      setLeftAppleCount(leftApple + 1)
      setRightAppleCount(rightApple - 1)
 
    }
  }

  const rightArrowHandler = () => {
    if (leftApple > 0) {
      setLeftAppleCount(leftApple - 1)
      setRightAppleCount(rightApple + 1)
    }
  }

  return (
    <section>
      <Applebasket appleCount={leftApple} backetName="Basket 1" />
      <Button
        imageUrl={LeftArrow}
        titleText={'Left Arrow'}
        altText={'Left Arrow'}
        clickHandler={leftArrowHandler}
      />
      <Button
        imageUrl={RightArrow}
        titleText={'Right Arrow'}
        altText={'Right Arrow'}
        clickHandler={rightArrowHandler}
      />
      <Applebasket appleCount={rightApple} backetName="Basket 2" />
    </section>
  );
};
export default AppleCounter;
