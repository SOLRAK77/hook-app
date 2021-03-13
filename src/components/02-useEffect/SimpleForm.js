import React, { useEffect, useState } from 'react'
import {Message} from './Message'

import './effects.css'

export const SimpleForm = () => {

    const [stateForm, setStateForm] = useState(
        {
            name:'',
            email:''
        }
    )

    const {name, email} = stateForm

    /*
    useEffect(() => {
        console.log('Hola!!!')
    },[])

    useEffect(() => {
        console.log('Cambio algun elemento del Form')
    },[stateForm])

    useEffect(() => {
        console.log('Cambio en el elmento Email')
    },[email])
    */

    const handleOnChange = (e) => {
        setStateForm(
            {
            ...stateForm,
            [e.target.name] : [e.target.value]
            }
        )
    }

    return (
        <>
            <h1>UseEffect</h1>   
            <hr/>
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input 
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre.."
                className="form-control"
                value={name}
                onChange={handleOnChange}
                autoComplete="off"
            />
            <label htmlFor="email" className="form-label">Correo Electronico:</label>
            <input 
                type="email"
                id="email"
                name="email"
                placeholder="tu correo..."
                className="form-control"
                value={email}
                onChange={handleOnChange}
                autoCorrect="off"
                />

            { name == '123'? <Message />:'' }
        </>
    )
}
