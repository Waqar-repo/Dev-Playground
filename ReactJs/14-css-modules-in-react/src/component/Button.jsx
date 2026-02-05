import styles from '../component/Counter.module.css'

const Button = ({ imageUrl, altText, clickHandler,children}) => {
  
    
  return (
    <button className="button"  title={children} onClick={clickHandler}>
{children}
      <img src={imageUrl} alt={children} />
    </button>
  );
};

export default Button;