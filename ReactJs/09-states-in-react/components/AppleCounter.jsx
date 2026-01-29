import Button from './Button';
import Applebasket from './Applebasket';
import './AppleCounter.css';
import { createRoot } from 'react-dom/client';

const LeftArrow = new URL('../assets/images/left-arrow.png', import.meta.url);
const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);

const totalApple = 10;
let rightApple = 0;
let leftApple = totalApple - rightApple;


const root = createRoot(document.querySelector('#root'));

const AppleCounter = () => {
  const leftArrowHandler = () => {
    if (rightApple > 0) {
      rightApple--;
      leftApple++;
      root.render(<AppleCounter />);
    }
  };

  const rightArrowHandler = () => {
    if (leftApple > 0) {
      leftApple--;
      rightApple++;
      root.render(<AppleCounter />);
    }
  };

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
