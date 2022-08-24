import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
  
  const { counter, incremento, decremento, reseto } = useCounter();
  return (

    <>
    <h1>Counter With Hook </h1>

    <hr />
    <h1 > { counter }</h1>
  
    <hr />
    <button  onClick={ () => incremento(5) } className="btn btn-primary"> +1 </button>
    <button  onClick={() => decremento(5)} className="btn btn-primary"> -1 </button>
    <button  onClick={reseto} className="btn btn-primary"> Reset </button>
    <hr />
    </>
    

  )
}
