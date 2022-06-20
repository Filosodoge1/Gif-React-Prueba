// import React from 'react'

import { useState } from "react";
import { useEffect } from "react";
import { Gifapi } from "../helpers/getGif";


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

        <ol>
          {
            first.map( ({id, title}) => (
              
              <li key={id}>{title}</li>
            ))
          }
        </ol>
    </>
  )
}