import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm'
import './style.css'

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

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

    //console.log(description);
    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(toDos));
    }, [toDos])

    const handleDelete = (todoId) => {
        console.log('me disparo' + todoId)
        const actionDelete = {
            type:'delete',
            payLoad : todoId
        }

        dispatch( actionDelete );
    }

    const handleSubmit =  (e) =>{
        e.preventDefault();

        /* Validando cadena vacia y no inserte */
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
                    <ul className="list-group list-group-flush">
                    {
                        toDos.map((todo,i) => {
                            return (
                                    <li 
                                        key={todo.id}
                                        className="list-group-item"
                                    >
                                        <p 
                                            className={ `${todo.done && 'complete'}` }
                                            onClick={() => handleToggle(todo.id)}
                                        >
                                            {i+1}. {todo.desc} 
                                        </p>
                                        
                                        <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                        >
                                            Borra
                                        </button>                                        
                                    </li>
                                    )
                        })
                    }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar ToDO</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="submit"
                            className="btn btn-primary mt-3 btn-block"
                        >
                            Agregar ToDO
                        </button>
                    </form>
                </div>
            </div>            
        </div>
    )
}
