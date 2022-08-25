import { useMemo, useState } from "react"
import { useCounter } from "../hooks"
import { Smallx } from "./Smallx"

const heavyStuff = ( iterationNumber=100 ) => {
    for (let i=0; i< iterationNumber; i++){
      console.log('Ahi vamos...')
    }
  return `${iterationNumber} Iteraciones Realizadas`
}

export const MemoHook = () => {

   const {counter, incremento} = useCounter(400);
   const [show, setShow] = useState(true);

   const memorizeValue = useMemo( () =>  heavyStuff(counter),[counter])
  return (
    <>
        <h1> counter: <small> {counter} </small>  </h1>
        <hr />

        <h4> {memorizeValue} </h4>
        <button
        className="btn btn-primary"
        onClick={ ()=>incremento() }
        >
            +1
        </button>

        <button
        className="btn btn-outline-primary"
        onClick={ ()=> setShow(!show) }
        >
            Show/Hide { JSON.stringify(show)}
        </button>

    </>
  )
}
