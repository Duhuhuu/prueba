import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";




export const MultipleCustomHooks = () => {


  const { counter, incremento, decremento } = useCounter(1)
  const {data, isLoading, hasError} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];


  // console.log({data, isLoading, hasError});

  return (

    <>
    <h1>BreakingBad Quotes</h1>
    <hr />

    {/* Abro un script aqui y pongo el loading asi como el nombre en la esquina con un operador ternario */}
    {

      // Operacion ternaria simplificada de todo el codigo comentado de abajo
      isLoading
       // Forma llamando el componente solo creado para el login
       ?<LoadingQuote/>
          // Creando un componente con el mismo codigo de abajo que muestra la informacion del author y el quote
        :<Quote author={author} quote={quote} />
      // isLoading 
      // ? (
      //   // Forma de poner el login sin creacion de ningun componente ni nada
      //   // <div className="aler alert-info text-center">
      //   // Loading...
      //   // </div>

       
      //   ) 
      //   : (

       

      //     // forma para poner los datos sin tener que llamar un componente para el
      //     //   <blockquote className="blockquote text-end">
      //     //   <p className="mb-1"> {quote} </p>
      //     //  <footer className="blockquote-footer"> {author} </footer>
      //     //  </blockquote> 
      //     )
     }

    <button className="btn btn-primary" onClick={()=> incremento(1) }  disabled= {isLoading}>
      Next quote
    </button>

    <button className="btn btn-primary" onClick={()=> decremento(1) }  disabled= {isLoading}>
      Next quote
    </button>




    </>
  )
}
