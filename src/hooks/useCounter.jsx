import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [ counter, setCounter  ] = useState(initialValue)

    const incremento = ( value = 1 ) =>{

        setCounter( counter+value );
    }
    const decremento = ( value = 1 ) =>{
        // un IF para ponerle un limite hasta donde quiero que llege el decremento
        if (counter ===0)return;

        setCounter( counter-value );
    }
    const reseto = ( ) =>{

        setCounter( initialValue );
    }


    return{

        counter,
        incremento,
        decremento,
        reseto,

    }

}