import {useState} from 'react'


const UseofState = () =>
{

    const [number, setNumber]= useState(0);

const Increment = () => 
{
    return setNumber(number+1);
};

const Reset = ()=>
{
    return setNumber(0);
}


    return (
        <>
        <div className='container'>
    <h1>This is React useState Hook</h1>
    <h2>{number}</h2>
    </div>
    <div className='container1'>
    <button className='btnInc' onClick={Increment}>Increment</button>
    <button className='btnReset' onClick={Reset}>Reset</button>
    </div>
    </>
    );


};

export default UseofState;