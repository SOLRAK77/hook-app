export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'add':
            return [...state,action.payLoad];

        default:
            return state;
    }
}