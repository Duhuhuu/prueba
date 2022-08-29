import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState=[
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done:false
    // },
    // {
    //     id: new Date().getTime() + 100,
    //     description: 'Recolectar la piedra del poder',
    //     done:false
    // },
];

const init = () =>{

    return JSON.parse( localStorage.getItem('todos') || [] );
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

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
    console.log({id})
        // dispatch ({
        //     type: '[TODO] Remove Todo',
        //     payload: id
        // })
    }

  return (
    <>
        <h1>TodoApp: 10, <small>Pendientes: 2</small> </h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos = {todos} onDeleteTodo={ id => handleDeletTodo(id) } />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd */}
                    <TodoAdd  onNewTodo={ hanleNewTodo }/>
            </div>
        </div>
    </>
  )
}
