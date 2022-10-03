import {useState, useEffect} from 'react'


const UseofEffect = () =>
{

    const [number, setNumber]= useState(0);
    const [dec, setDec]= useState(100);


    useEffect(() => {
        
             console.log('Use Effect on decrement is Called ') 
        
    }, [dec])

const Increment = () => 
{
    return setNumber(number+1);
};

const Decrement = ()=>
{
    return setDec(dec-1);
};


    return (
        <>
        <div className='container'>
    <h1>This is React useEffect Hook</h1>
    <h2>This is Icrement: {number}</h2>
    <h2>This is Decrement: {dec}</h2>
    </div>
    <div className='container1'>
    <button className='btnInc' onClick={Increment}>Increment</button>
    <button className='btnReset' onClick={Decrement}>Decrement</button>
    </div>
    </>
    );


};

export default UseofEffect;