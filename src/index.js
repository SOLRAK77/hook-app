
const initialState = [{
    id:1,
    todo:'Revisar Oilaunch',
    done: false
}];

const newTodo = {
    id:2,
    todo:'Revisar DMarti',
    done: false
}

const addTodoaction = {
    type:'agregar',
    paylod: newTodo
}

const todoReducer = (state = initialState, action) => {
    if(action?.type === 'agregar'){
        return [...state, action.paylod]
    }
    return state;
}

let todos = todoReducer();

todos = todoReducer( todos, addTodoaction);

console.log(todos);