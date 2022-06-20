// import React from 'react'

import { useState } from "react";
import { useEffect } from "react";
import { Gifapi } from "../helpers/getGif";


export const GifGrid = ({category}) => {
  
  const [first, setfirst] = useState(10)

  useEffect(() => {
    Gifapi(category);
  
  }, []);
  
  
  
  return (
    <div>
        <h1>{category}</h1>

        <h3>{first}</h3>
        <button onClick={ () => setfirst(first+1)}>+1</button>
    </div>
  )
}