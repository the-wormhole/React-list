function Button({customClass,onClick, text}){
    return<button className={customClass} onClick={onClick}>
        {text}
    </button>
}

export default Button;