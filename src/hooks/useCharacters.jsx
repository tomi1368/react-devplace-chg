import {useEffect,useState} from 'react';
import axios from 'axios';

export const useCharacters = () => {
  const [characters,setCharacters] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [uniqueInfo,setUniqueInfo] = useState(null)
  useEffect(()=>{
        const fetching = async ()=>{
            try{
                let results  = await axios.get("https://rickandmortyapi.com/api/character")
                setCharacters(results.data.results)
                if (results.length === 1) setUniqueInfo(results.data.results[0])
                setError(false)
            }
            catch(err){
                setError(true)
            }finally{
                setLoading(false)
        }
    
  }
    fetching()
  
   },[])

  const changeUniqueInfo = (char)=>{
    setUniqueInfo(char)
  }
  return {
      characters,
      error,
      uniqueInfo,
      changeUniqueInfo,
      loading
  };
};
