export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'add':
            return [...state,action.payLoad];

        case 'delete':
            return state.filter(todo => todo.id !== action.payLoad);

        case 'toggle':
            return state.map(todo => (
                todo.id === action.payLoad 
                ? {...todo,done:!todo.done}
                : todo
            ))
        
        case 'toggle_ver1':
            return state.map( todo => {
                console.log(todo);
                if(todo.id == action.payLoad){
                    console.log('Entra');
                    return {
                        ...todo,
                        done : !todo.done    
                    }
                }
                else{
                    return todo;                   
                }
            })

        default:
            return state;
    }
}