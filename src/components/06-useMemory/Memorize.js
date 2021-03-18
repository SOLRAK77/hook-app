import React, {useState} from 'react'
import {useCustomCouter} from '../../Hooks/useCustomCouter'
import {Small} from './Small'

import './effects.css'

export const Memorize = () => {

    const {counter, increment} = useCustomCouter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <p>Contador <Small value={counter}/></p>
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
