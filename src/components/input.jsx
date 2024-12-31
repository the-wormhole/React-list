function Input({type="text",customClass,...props}){

    return <input type={type} className={customClass} {...props}/>
}

export default Input;