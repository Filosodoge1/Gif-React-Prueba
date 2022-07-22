import { useState, useEffect } from 'react'
import { GifApi } from '../Helpers/GifApi'

export const useFetchGifs = (category) => {
  
    const [first, setfirst] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const arregloImg = async() => {
      const newImg = await GifApi(category);
      setfirst(newImg);
      setisLoading(false);
    }
  
    useEffect(() => {
      arregloImg();
    }, []);

    return {
        first,
        isLoading
    }
}
