import './styles.css';

function Button ({buttonName='Get', buttonType='button'}){
    // console.log(props.buttonName);
    
    return <button className='main-button' type={buttonType}>{buttonName}</button>;
}

export default Button;