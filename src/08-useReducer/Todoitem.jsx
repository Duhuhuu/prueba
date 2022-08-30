import React from 'react'

export const Todoitem = ({ todo, onDeleteTodo, onToggleTodo }) => {


  return (
    <li className="list-group-item d-flex justify-content-between"> 
      <span
      // version 1 de tachar las cosas de la lista 
      // className={`align-self-center ${ todo.done && 'text-decoration-line-through' }`} 
      className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': ''}`} 
      onClick = { () => onToggleTodo(todo.id) } 
      > 
        {todo.description} 
      </span> 
      <button
        className="btn- btn-danger" 
        onClick={ ()=> onDeleteTodo(todo.id) 
        }
        >
        Borrar
      </button>
    </li>
  )
}
