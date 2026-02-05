import AppleCounter from "./AppleCounter";
import styles from '../component/Counter.module.css'
const Applebasket = ({ appleCount, backetName,fullEmpty }) => {
  
  return (
    <div className="apple-basket">
      <h1 >
        <span>{appleCount}</span> Apple
      </h1>
      <p>{backetName}{appleCount === 10  &&'  (Full)'}{appleCount === 0  &&'  (empty)'}{(appleCount >= 5 && appleCount !== 10) &&  '  Half Full'}</p>
    </div>
  );
};
export default Applebasket;
