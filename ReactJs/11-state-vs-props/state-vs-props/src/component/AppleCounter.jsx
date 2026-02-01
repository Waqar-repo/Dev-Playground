import Button from './Button';
import Applebasket from './AppleBasket';
import './AppleCounter.css';

import { useState,Fragment } from 'react';

import LeftArrow from '../assets/left-arrow.png';
import RightArrow from '../assets/right-arrow.png';

// let rightApple = 0;
console.log(Fragment);
const AppleCounter = () => {
  const totalApple = 10;

  const [rightApple, setRightAppleCount] = useState(0);
  const [leftApple, setLeftAppleCount] = useState(totalApple);

  const leftArrowHandler = () => {
    if (rightApple > 0) {
      setLeftAppleCount(leftApple + 1);
      setRightAppleCount(rightApple - 1);
    }
  };

  const rightArrowHandler = () => {
    if (leftApple > 0) {
      setLeftAppleCount(leftApple - 1);
      setRightAppleCount(rightApple + 1);
    }
  };

  return (
    <Fragment>
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
    <p>hi</p>
    </Fragment>
  );
};
export default AppleCounter;
