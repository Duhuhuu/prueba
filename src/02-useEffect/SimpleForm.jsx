import { useEffect, useState } from "react"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'gabriel',
        email: 'Ignisxgato@gmail.com'
    })

    const { username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ] : value

        })
        console.log(name, value)

    }

    useEffect( ()=> {
        console.log('useEffect Called!')

    } );


  return (
    <>
    <h1>simpleFormato</h1>
    <hr />

    <input  
     
     type="text"
     className="form-control"
     placeholder="Pon tu Correo"
     name="username"
     value={username}
     onChange= {onInputChange}
     />
    
    <input  
     
     type="email"
     className="form-control mt-2"
     placeholder="Inserta tu Correo"
     name="email"
     value={email}
     onChange= {onInputChange}
     />









    </>
    



  )
}
