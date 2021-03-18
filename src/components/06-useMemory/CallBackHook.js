import React, {useState, useCallback} from 'react'
import './effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    /*
    const increment = () =>{
        setCounter(counter + 1)
    }
    */

    /* Este es uno de los 2 casos de uso mas comunes con el useCallBack */
    const increment = useCallback(
        (factor) => {
            setCounter(c => c + factor)
        },
        [setCounter],
    )

    return (
        <div>
            <h1>UseCallBack Hook</h1>
            <hr/>
            <p>{`Contador: ${counter}`}</p>    
            <ShowIncrement 
                increment={increment} 
                factor={10} />
        </div>
    )
}
