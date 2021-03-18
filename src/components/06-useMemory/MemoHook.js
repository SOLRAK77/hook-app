import React, {useState, useMemo} from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import {useCustomCouter} from '../../Hooks/useCustomCouter'

import './effects.css'

export const MemoHook = () => {

    const {counter, increment} = useCustomCouter(10000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memorize - HOOK</h1>
            <hr/>
            <p>Contador <small>{counter}</small></p>
            {/*<p>{procesoPesado(counter)}</p>*/}
            <p>{memoProcesoPesado}</p>
            <button
                className="btn btn-primary m-3"
                onClick={ () => {increment()}}
            >+</button>
            <button
                className="btn btn-outline-success"
                onClick={() =>{setShow(!show)}}>
                show - hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
