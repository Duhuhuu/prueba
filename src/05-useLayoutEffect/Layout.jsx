import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';




export const Layout = () => {

  const { counter, incremento, decremento } = useCounter(1)
  const {data, isLoading, hasError} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
    {
      // Operacion ternaria simplificada de todo el codigo comentado de abajo
      isLoading
       ?<LoadingQuote/>
        :<Quote author={author} quote={quote} />
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
