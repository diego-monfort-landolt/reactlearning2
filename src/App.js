import './App.css';
import React, {useState} from 'react';
import Sumar from './components/Sumar';
import Fame from './components/Fame';

function App() {
  const [contador, setContador]= useState(0);

  return (
    <div className="App">
      <button onClick={()=> setContador(contador+1)}>Aumentar</button>
      <button onClick={()=>setContador(contador-1)}>Disminuir</button>
      <button onClick={()=> setContador(0)}>Restablecer</button>

      <div className='container-btn'><h2>{contador}</h2></div>
      <div className='borderbr'><h3>Sumar</h3><br/></div>
      
     
      <Sumar /><br/>
       <Fame />
     
    </div>
  );
}

export default App;
