export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'add':
            return [...state,action.payLoad];

        case 'delete':
            return state.filter(todo => todo.id !== action.payLoad);

        default:
            return state;
    }
}