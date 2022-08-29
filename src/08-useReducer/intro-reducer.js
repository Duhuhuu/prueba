const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del alam',
    done: false,

}];

const todoReducer = (state = initialState, action = {}) =>{

    if (action.type === '[TODO] add todo'){
      
        return [...state,action.payload];
    };

    return state;

};

let todos = todoReducer();


const newTodo= {
    id: 2,
    todo: 'Recolectar la piedra del poder', 
    done:false
}
const addTodooAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodooAction)
console.log({state: todos});
// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done:false

// })









