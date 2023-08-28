import React, {useState} from 'react';
import './Sumar.css';

 const Sumar = () => {
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState();

    const result = () => {
        setResultado(Number(numero1) + Number(numero2));
    }
    const modificar1 = (e) => {
        setNumero1(e.target.value);
        
    }
    const modificar2 = (e) => {
        setNumero2(e.target.value);
    }

  return (
    <div className="container-sumar"> 
        

        <input type='number'value={numero1} onChange={modificar1} /> +
        <input type='number' value={numero2} onChange={modificar2} /> =
        <input type='number' value={resultado} readOnly/>
        <button onClick={result} className='btn-sumar'>Sumar</button>

      

    </div>
  )
}
export default Sumar;