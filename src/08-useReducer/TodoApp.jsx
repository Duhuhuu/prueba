import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

// const initialState=[
//     // {
//     //     id: new Date().getTime(),
//     //     description: 'Recolectar la piedra del alma',
//     //     done:false
//     // },
//     // {
//     //     id: new Date().getTime() + 100,
//     //     description: 'Recolectar la piedra del poder',
//     //     done:false
//     // },
// ];


export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeletTodo, handleToggleTodo, hanleNewTodo} = useTodos();

  return (
    <>
        <h1>TodoApp: {todosCount}, <small>Pendientes: { pendingTodosCount } </small> </h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList 
                todos = {todos} 
                onDeleteTodo=  { id => handleDeletTodo(id) } 
                onToggleTodo = {handleToggleTodo}
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd */}
                    <TodoAdd  
                    onNewTodo={ hanleNewTodo }
                    />
            </div>
        </div>
    </>
  )
}
