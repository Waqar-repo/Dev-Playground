const Button = ({ imageUrl, titleText, altText, clickHandler }) => {

  return (
    <button title={titleText} onClick={clickHandler}>
      <img src={imageUrl} alt={altText} />
    </button>
  );
};

export default Button;