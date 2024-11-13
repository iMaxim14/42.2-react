import './styles.css';

function Button ({buttonName='Get'}){
    // console.log(props.buttonName);
    
    return <button className='main-button'>{buttonName}</button>;
}

export default Button;