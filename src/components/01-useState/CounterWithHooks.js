import React from 'react'
import {useCustomCouter} from '../../Hooks/useCustomCouter'

export const CounterWithHooks = () => {

    const {increment, decrement, counter} =useCustomCouter(20);

    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr/>
            <button onClick={decrement} className="btn btn-outline-primary" >-1</button>
            <button onClick={increment} className="btn btn-outline-primary" >+1</button>            
        </>
    )
}
