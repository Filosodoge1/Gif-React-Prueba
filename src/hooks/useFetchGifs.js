import { useEffect, useState } from 'react'
import { Gifapi } from '../helpers/getGif';

export const useFetchGifs = (category) => {
  
    const [image, setimage] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const arreglosImg = async() => {
        const newImg = await Gifapi(category); 
        setimage(newImg);
        setisLoading(false);
      }
    
      useEffect(() => {
        arreglosImg();
      }, []);
  
    return{ 
        image: image,
        isLoading: isLoading
  }
}
