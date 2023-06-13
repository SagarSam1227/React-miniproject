import { useEffect, useState } from "react"

const useFetchImp = (API,dependency)=>{
    const [output,setOutput] = useState()

    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch(API);
            const result = await response.json();
            setOutput(result);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();

      }, [dependency]);

    return output;
}

export default useFetchImp;