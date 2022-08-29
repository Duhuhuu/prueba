import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
  
const {description, onInputChange, onResetForm} = useForm({
    description: ''
})


  const onFormSubmit = (event) =>{
    event.preventDefault();
    if ( description.length <= 1) return;

    const NewTodo ={
        id: new Date().getTime() + 100,
        description: description ,
        done: false,
    
    }
    onNewTodo(NewTodo);
    onResetForm();
  }

  
  
    return (
        <form onSubmit={ onFormSubmit } >
        <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name = "description"
        value = {description}
        onChange = {onInputChange}
        />
      
        <button
            type="submit"
            className="btn btn-outline-primary mt-2"
            >
            Agregar
        </button>
        </form>
    )
}