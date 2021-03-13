import React from 'react'
import {useCustomCouter} from '../../Hooks/useCustomCouter'

export const CounterWithHooks = () => {

    const {increment, decrement, reset, counter} =useCustomCouter(20);

    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr/>
            {/*Se manda con una funcion arrow ya que si se manda decrement(2), lo primero que recibe es el evento del mouse*/}
            <button onClick={() => decrement(2)} className="btn btn-outline-primary" >-1</button>
            <button onClick={reset} className="btn btn-outline-primary" >Restablecer</button>
            <button onClick={() => increment(2)} className="btn btn-outline-primary" >+1</button>            
        </>
    )
}
