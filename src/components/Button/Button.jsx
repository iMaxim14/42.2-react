import './styles.css';

function Button (){
    const isGetButton = false;

    return <button className='main-button'>{isGetButton ? 'Get' : 'Send'}</button>;
}

export default Button;