import { useState } from 'react';
import Button from './Button';
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
             <Button label="1" onClick={() => TrocarNumero('1')}></Button>
             <Button label="2" onClick={() => TrocarNumero('2')}></Button>
             <Button label="3" onClick={() => TrocarNumero('3')}></Button>
            
         
      </div>

      <div className='calc-container'>
          
             <Button label="4" onClick={() => TrocarNumero('4')}></Button>
             <Button label="5" onClick={() => TrocarNumero('5')}></Button>
             <Button label="6" onClick={() => TrocarNumero('6')}></Button>
          
      </div>

      <div className='calc-container'>
         
           <Button label="7" onClick={() => TrocarNumero('7')}></Button>
             <Button label="8" onClick={() => TrocarNumero('8')}></Button>
             <Button label="9" onClick={() => TrocarNumero('9')}></Button>
              <Button label="0" onClick={() => TrocarNumero('0')}></Button>

      </div>

      <div className='calc-container'>
         
             <Button label="+" onClick={() => operacao('+')}></Button>
              <Button label="-" onClick={() => operacao('-')}></Button>
              <Button label="*" onClick={() => operacao('*')}></Button>
             <Button label="%" onClick={() => operacao('%')}></Button>
              <Button label="=" onClick={() => resultado('=')}></Button>
              <Button label="c" onClick={() => clear('c')}></Button>

      </div>
    </main>
    </div>
  )
}

export default App
