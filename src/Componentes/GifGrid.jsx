// import React from 'react'

import { Gifapi } from "../helpers/getGif";


export const GifGrid = ({category}) => {
  
  Gifapi(category);
  
  return (
    <div>
        <h1>{category}</h1>
    </div>
  )
}