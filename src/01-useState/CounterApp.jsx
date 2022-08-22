import { useState } from "react"

export const CounterApp = () => {

  const [state, setCounter] = useState(
   { 
    counter1: 10,
    counter2: 20,
    counter3: 30,}

  )
  
  //destructuro los valores del objeto en el state
  const {counter1, counter2, counter3} = state;

    return (
    <>
    <h1>Counter1:{ counter1 } </h1>
    <h1>Counter2:{ counter2 } </h1>
    <h1>Counter3:{ counter3 } </h1>

    <hr />

    <button className="btn" onClick={ () => setCounter ( {
        //Uso el operador spreat " ... " y mando a conservar todos los valores del objeto.
         ...state, counter1: counter1  +  1}) } >+1</button>

    </>
  )
}
