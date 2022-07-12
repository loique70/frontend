import { useState, useEffect } from "react";

const  CallEndpoint = (url) =>{
    const [backendData, setBackendData] = useState([]);
    const [enAttente, setEnAttente] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(response =>{
          if(!response.ok){
            throw Error("On ne peut faire un fetch depuis cette ressource!")
          }
          return response.json()
        })
        .then(data =>{
          setBackendData(data)
          setEnAttente(false)
          setError(null)
        }) 
        .catch(err =>{
          setEnAttente(false)
          setError(err.message)
        })   
      }, [url])

      return {backendData,error,enAttente}
}

export default CallEndpoint;