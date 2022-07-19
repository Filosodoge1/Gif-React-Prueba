// import React from 'react'

import { useState } from "react";
import { useEffect } from "react";
import { Gifapi } from "../helpers/getGif";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
  const [first, setfirst] = useState([]);

  const arreglosImg = async() => {
    const newImg = await Gifapi(category); 
    setfirst(newImg);
  }

  useEffect(() => {
    arreglosImg();
  }, []);
  
  /* OTRA FORMA DE REALIZARLO
  useEffect(() => {
    Gifapi(category)
    .then( newImages => setfirst(newImages));
  
  }, []);
  */
  return (
    <>
        <h1>{category}</h1>

        <div className='card-grid'>
          {
            first.map( (image) => (
              
              <GifItem key={image.id} {...image}/>
            ))
          }
        </div>
    </>
  )
}
