import { useEffect, useReducer } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );

    }, [todos])
    
    const hanleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo

        }

        dispatch(action);
        // console.log({todo});
    }

    const handleDeletTodo= (id) =>{
    // console.log({id})
        dispatch ({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo= (id) =>{
    // console.log({id})
        dispatch ({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }




  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    hanleNewTodo,
    handleDeletTodo,
    handleToggleTodo,

  }
    
  
}
