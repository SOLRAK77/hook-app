import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm'
import './style.css'
import { TodoList } from './TodoList'
import {TodoAdd} from './TodoAdd'

//const initialState = 

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    /*
    [{
        id: new Date().getTime(),
        desc : 'Apender CSS Avanzado',
        done : false
    }];
    */
}


export const TodoApp = () => {

    const [toDos, dispatch] = useReducer(todoReducer, [], init)

    //console.log(toDos)    

    //console.log(description);
    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(toDos));
    }, [toDos])

    const handleDelete = (todoId) => {
        const actionDelete = {
            type:'delete',
            payLoad : todoId
        }

        dispatch( actionDelete );
    }

    /*
    const handleSubmit =  (e) =>{
        e.preventDefault();

        // Validando cadena vacia y no inserte
        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id : new Date().getTime(),
            desc : description,
            done : false
        }

        const actionToDo = {
            type: 'add',
            payLoad : newTodo
        }

        //console.log(actionToDo);
        dispatch( actionToDo )
        reset();
    }
    */

    const handleAddTodo = (newTodo) =>{
        dispatch( {
            type: 'add',
            payLoad : newTodo
        } );
    }

    const handleToggle = (todoId) =>{

        dispatch({
            type: 'toggle',
            payLoad : todoId
        })
    }

    return (
        <div>
            <h1>Todo APP ({toDos.length})</h1>
            <hr/>
            <h2>Lista de Tareas</h2>
            <p></p>
            <div className="row">
                <div className="col-7">
                    {/* TodoList, toDos, handleDelate, handleToggle */}                    
                    <TodoList toDos={toDos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}  />
                </div>
            </div>            
        </div>
    )
}
