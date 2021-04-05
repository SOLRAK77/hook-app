import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

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

        //console.log(actionToDo);
        handleAddTodo( newTodo )
        reset();
    }

    return (
        <>
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
        </>
    )
}
