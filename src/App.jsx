import { useState } from 'react';
import './App.css';

function App() {

  const[ displayValue, setDisplayValue] = useState("0");
  const [ previosValue, setPreviosValue] = useState(null);
  const [ operation, setOperation] = useState(null);







  const TrocarNumero = (number) => {
    if (displayValue === "0"){
      setDisplayValue(number);
    } else{
      setDisplayValue(displayValue + number);  
    }
  }



  const operacao = (op) => {
    setPreviosValue(displayValue);
    setOperation(op);
    setDisplayValue("0")
  }

   const clear = () => {
    setDisplayValue("0");
  };
  
  const resultado = ()=>{
    const prev = parseFloat(previosValue);
    const current = parseFloat(displayValue);


    let result;
  
    switch(operation){
      case '+':
        result  = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '%':
        result = prev / current;
        break;
      case '*':
        result = prev * current;
        break;
      default :
        return;
    }

    setDisplayValue(String(result));


    setPreviosValue(null);
    setOperation(null);
  }
  

  return (
    <div>
      <h1>
        calculadora online
      </h1>

      <main className='container'>
            <div className='display item'> 
              {displayValue}
            </div>
            <div className='calc-container'>
             <button className='item' onClick={() => TrocarNumero('1')}>1</button>
             <button className='item' onClick={() => TrocarNumero('2')}>2</button>
             <button className='item' onClick={() => TrocarNumero('3')}>3</button>
            
         
      </div>

      <div className='calc-container'>
          
             <button className='item' onClick={() => TrocarNumero('4')}>4</button>
             <button className='item' onClick={() => TrocarNumero('5')}>5</button>
             <button className='item' onClick={() => TrocarNumero('6')}>6</button>
          
      </div>

      <div className='calc-container'>
         
            <button className='item' onClick={() => TrocarNumero('7')}>7</button>
             <button className='item' onClick={() => TrocarNumero('8')}>8</button>
             <button className='item' onClick={() => TrocarNumero('9')}>9</button>

      </div>

      <div className='calc-container'>
         
            <button className='item' onClick={() => operacao('+')}>+</button>
             <button className='item' onClick={() => operacao('-')}>-</button>
             <button className='item' onClick={() => operacao('*')}>*</button>
             <button className='item' onClick={() => operacao('%')}>%</button>
             <button className='item' onClick={() => resultado()}>=</button>
             <button className='item' onClick={() => clear()}>c</button>

      </div>
    </main>
    </div>
  )
}

export default App
