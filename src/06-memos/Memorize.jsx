import { useState } from "react"
import { useCounter } from "../hooks"
import { Smallx } from "./Smallx"


export const Memorize = () => {

   const {counter, incremento} = useCounter()
   const [show, setShow] = useState(true)

  return (
    <>
        <h1> counter: <Smallx value={counter} />  </h1>
        <hr />
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
