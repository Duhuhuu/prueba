import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
  
  const {} = useCounter();
  return (

    <>
    <h1>Counter With Hook</h1>

    <hr />
    <br />
  


    <hr />
    <button className="btn btn-primary"> +1 </button>
    <button className="btn btn-primary"> -1 </button>
    <button className="btn btn-primary"> Reset </button>
    <hr />
    </>
    

  )
}
