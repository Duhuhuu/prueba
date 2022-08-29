import { Todoitem } from "./Todoitem"

export const TodoList = ({ todos = [], onDeleteTodo }) => {
 
  
    return (
        <ul className="list-group">
        {
            todos.map( todo => (
              <Todoitem key = {todo.id} todo={todo} onDeleteTodo= { id => onDeleteTodo(id) } />
            ))
        }
        </ul>

  )
}
