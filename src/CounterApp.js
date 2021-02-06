import React,{useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value = 10})=>{

    const [counter,setCounter] = useState(value);

    const handleadd = ()=>{setCounter(counter + 1)};

    const handleaddReset = ()=>{setCounter(value)};

    const handleSubstract = ()=>{setCounter(counter - 1)};

    return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    <div className="botones">
    <button className="btn-incrementar" onClick={handleadd}>+1</button>
    <button className="btn-Reiniciar" onClick={handleaddReset}>Reiniciar</button>
    <button className="btn-decrementar" onClick={handleSubstract}>-1</button>
    </div>
    </>
    );
}

CounterApp.propTypes ={
    value: PropTypes.number
};

export default CounterApp;