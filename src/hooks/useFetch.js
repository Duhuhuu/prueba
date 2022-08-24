import { useEffect, useState } from 'react';


export const useFetch = ( url ) => {

    const [estate, setEstate] = useState({
        data: null,
        isLoading: true,
        hasError: null,

    })


    const getFetch = async () =>{

        setEstate({
            ...estate,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data  = await resp.json();
        console.log(data)

        setEstate({
            data: data,
            isLoading:false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
        
    }, [url])
    
   





  return { 
    data:      estate.data, 
    isLoading:  estate.isLoading,
    hasError:   estate.hasError,
 };
}
