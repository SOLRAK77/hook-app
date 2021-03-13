import React from 'react'
import {useForm} from '../../Hooks/useForm'

import './effects.css'

export const FormWithCustomHook = () => {

    const [FormValues, handleInputChange] = useForm(
        {
            name:'',
            email:'',
            password:''
        }
    )

    const {name, email, password} = FormValues

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormValues)
    }

    return (
        <form onSubmit={handleSubmit} className="container">
            <h1>Form With Custom Hook</h1>   
            <hr/>
            <div className="form-gruop">            
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input 
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre.."
                className="form-control"
                value={name}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                autoCorrect="off"
                />
            <label htmlFor="password" className="form-label">Password:</label>
            <input 
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                className="form-control"
                value={password}
                onChange={handleInputChange}
                autoCorrect="off"
                />
            </div>            
            <hr/>
            <div className="row justify-content-md-center">
                <button 
                type="submit"
                className="btn btn-primary col-3"
                >Guardar</button>
            </div>
        </form>
    )
}
