import React from 'react'
import {TodoListItem} from './TodoListItem'

export const TodoList = ({toDos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
        {
                        toDos.map((todo,i) => {
                            return (
                                    ///* TodoListItem, todo, index, handleDelate, handleToggle  */
                                    <TodoListItem 
                                        key={todo.id}
                                        todo={todo} 
                                        index={i+1} 
                                        handleDelete={handleDelete} 
                                        handleToggle={handleToggle}  />
                                    )
                        })
                    }
        </ul>
    )
}
