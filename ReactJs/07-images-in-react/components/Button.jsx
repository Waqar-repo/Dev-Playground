

const Button = ({imageUrl,titleText,altText}) =>{
    return <button title={titleText}>
        <img src={imageUrl} alt={altText} />
    </button>
}

export default Button