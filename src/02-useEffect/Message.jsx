import { useEffect } from "react";

export const Message = () => {


    useEffect(() => {

        // Funcion para obtener las cordenadas del event del movimiento del mause
        const onMouseMove = ({x, y}) =>{
            const coords = { x, y }
            console.log(coords)
        }

        // creo un windows con un eventlistener donde obtengo
        // toda la informacion del movimiento del Mouse.
        window.addEventListener('mousemove', onMouseMove);
    
      return () => {

        // creo un windows con un removelistener donde borro
        // toda la informacion del movimiento del Mouse.
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
