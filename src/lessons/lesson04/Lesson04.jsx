import Button from '../../components/Button/Button'
import Counter from '../../components/Counter/Counter'
import './styles.css'

function Lesson04(){

    const showMessage = () =>{
        alert('Func outer click')
    }

    const showCustomMessage = (name)=>{
        alert(`Function outer click - ${name}`)
    }

    return (
        <div className="lesson04-wrapper">
            <Counter/>
            {/* пример 1 использования ф-ии - создание ф-ии внутри кнопки  */}
            <div className='buttons-wrapper'>
                <Button buttonName='Button with inner f' onClick={()=>{alert('Func inner')}}/>
            {/* пример 2 использования ф-ии - создание ф-ии вне кнопки  */}
                <Button buttonName='Button with outer f' onClick={showMessage}/>
            {/* пример 3 использования ф-ии - создание ф-ии вне кнопки с аргументами  */}
                <Button buttonName='Button with parameters' onClick={()=>{showCustomMessage('Bob')}}/>
            </div>
        </div>
)}

export default Lesson04;