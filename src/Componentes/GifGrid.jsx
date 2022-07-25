// import React from 'react'

// import { useState } from "react";
// import { useEffect } from "react";
// import { Gifapi } from "../helpers/getGif";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
  
  const {image, isLoading} = useFetchGifs(category);
  
  // const [first, setfirst] = useState([]);

  
  
  /* OTRA FORMA DE REALIZARLO
  useEffect(() => {
    Gifapi(category)
    .then( newImages => setfirst(newImages));
  
  }, []);
  */
  return (
    <>
        <h1>{category}</h1>

        {/* {
          isLoading ? <h2>Cargando...</h2>:null
        } */}

        {
          isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
          {
            image.map( (imagen) => (
              
              <GifItem key={imagen.id} {...imagen}/>
            ))
          }
        </div>
    </>
  )
}
