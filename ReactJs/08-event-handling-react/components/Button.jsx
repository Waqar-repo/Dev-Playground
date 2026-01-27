const Button = ({ imageUrl, titleText, altText, onClickHandler }) => {
  return (
    <button title={titleText} onClick={onClickHandler}>
      <img src={imageUrl} alt={altText} />
    </button>
  );
};

export default Button;
