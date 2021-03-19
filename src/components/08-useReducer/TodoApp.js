import React, { useReducer } from 'react'
import {todoReducer} from './todoReducer'
import './style.css'

const initialState = [{
    id: new Date().getTime(),
    desc : 'Apender CSS Avanzado',
    done : false
}]

export const TodoApp = () => {

    const [toDos] = useReducer(todoReducer, initialState)

    console.log(toDos)

    return (
        <div>
            <h1>Todo APP</h1>
            <hr/>
            <h2>Lista de Tareas</h2>
            <p></p>
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Marca</li>
            </ul>
        </div>
    )
}
