import './styles.css'

function Input({inputName, inputType, inputPlaceholder, inputLabel}){
    
    return(
        <div className="input-wrapper">
                <label >{inputLabel}</label>
                <input name={inputName} type={inputType} placeholder={inputPlaceholder} className='input-style'/> 
        </div>
    )
}

export default Input;