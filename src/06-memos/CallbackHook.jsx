import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // aqui estamos memorizando la funcion dentro de un espacio de memoria
    // y con el callback la funcion ya no se vuelve a redibujar
    const incrementFather = useCallback(
      (value) => {
        setCounter((c) => c + value);
      },
      [],
    )
    


//    misma funcion que la de arriba nada mas que esta se vuelve a redibujar
//    cada vez que se llama el componente.
    // const incrementFather = () => {

    //     setCounter(counter + 1);
    // }

  return (
    <>
        <h1>useCallback hook: { counter } </h1>    
        <hr />
        <ShowIncrement increment={incrementFather} />

    </>

  )
}
